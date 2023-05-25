import WarningToast from "./components/WarningToast";
import SearchFilter from "./components/SearchFilter";
import FoodList from "./components/FoodList";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MyRecipesInfo from './components/MyRecipesInfo';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function App() {

  const localMeals = JSON.parse(localStorage.getItem('meals')) || [];
  const [savedMeals, setSavedMeals] = useState(localMeals);

  const baseURL = 'https://www.themealdb.com/api/json/v1/1/';

  const [categories, setCategories] = useState([]); //maybe move this + useEffect to <SearchFilter>
  const [areas, setAreas] = useState([]); //maybe move this + useEffect to <SearchFilter>

  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const filterFieldRef = useRef();

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    //TODO: Error handling
    axios.get(baseURL + 'list.php?c=list') //fetches list of categories
      .then((response) => {
        setCategories(response.data.meals);
      });

    //TODO: Error handling
    axios.get(baseURL + 'list.php?a=list') //fetches list of areas
      .then((response) => {
        setAreas(response.data.meals);
      });
  }, []); //no dependencies ==> only called ONCE on initial render (twice during Strict-mode) 

  // Called when user changes selected value in the list of categories / areas (in <SearchFilter>)
  function getRecipes(event) {
    filterFieldRef.current.value = '';
    const selectedOption = JSON.parse(event.target.value);

    let searchType = '';
    let searchString = '';

    //we need to check if selected value was from 'categories' or 'areas' for API call structure
    if (typeof selectedOption.strCategory !== 'undefined') {
      searchType = selectedOption.strCategory;
      searchString = baseURL + 'filter.php?c=' + searchType;
    } else {
      searchType = selectedOption.strArea;
      searchString = baseURL + 'filter.php?a=' + searchType;
    }

    console.log(searchString);

    axios.get(searchString) //TODO: Error handling
      .then((response) => {
        console.log(response.data.meals);
        setFilteredResults(response.data.meals); //initially, searchResults and filteredResults should be equal
        setSearchResults(response.data.meals);
      })
  }

  //called when user types in the filter-field for search results
  function filterRecipes(event) {
    const text = event.target.value;

    const filtered = searchResults.filter((meal) =>
      meal.strMeal.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredResults(filtered);
  }

  //called when user clicks button to save a meal
  function saveMeal(newMeal) {
    //we only allow the user to save a meal if it is not already stored 
    if (!savedMeals.some((meal) => meal.idMeal === newMeal.idMeal)) {
      setSavedMeals((prevMeals) => [...prevMeals, newMeal]);
    } else {
      setShowToast(true);
    }
  }

  //called whenever useState of savedMeals is updated, triggers re-render of saved meals
  useEffect(() => {
    //no need to check for duplicates before saving here since we do it in saveMeal()
    localStorage.setItem('meals', JSON.stringify(savedMeals));
  }, [savedMeals]);

  return (
    <Container>
      <h1>Recipe App</h1>
      <Row>
        <Col md={6} xl={6}>
          <SearchFilter filterRef={filterFieldRef} categories={categories} areas={areas} selectChange={getRecipes} filterChange={filterRecipes}></SearchFilter>
          <FoodList meals={filteredResults} saveButton={true} saveMeal={saveMeal}></FoodList>
        </Col>
        <Col md={6} xl={6}>
          <MyRecipesInfo></MyRecipesInfo>
          <FoodList meals={savedMeals} saveButton={true}></FoodList>
        </Col>
      </Row>

      {/* Alert that is displayed when user tries to save an already stored meal */}
      <WarningToast show={showToast} onClose={() => setShowToast(false)} />

    </Container>
  );
}

export default App;
