import WarningToast from "./components/WarningToast";
import SearchFilter from "./components/SearchFilter";
import FoodList from "./components/FoodList";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import TitleNavbar from "./components/TitleNavbar";
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import LocalSearchFilter from "./components/LocalSearchFilter";

function App() {

  const localMeals = JSON.parse(localStorage.getItem('meals')) || [];
  const [savedMeals, setSavedMeals] = useState(localMeals);
  const [localFilter, setLocalFilter] = useState('');

  const baseURL = 'https://www.themealdb.com/api/json/v1/1/';

  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const filterFieldRef = useRef();

  const [showToast, setShowToast] = useState(false);

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

    axios.get(searchString)
      .then((response) => {
        setFilteredResults(response.data.meals); //initially, searchResults and filteredResults should be equal
        setSearchResults(response.data.meals);
      })
      .catch((error) => {
        console.error("The search was not able to go through. Error message: " + error)
      });
  }

  //called when user types in the filter-field for search results
  function filterRecipes(event) {
    const text = event.target.value;

    const filtered = searchResults.filter((meal) =>
      meal.strMeal.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredResults(filtered);
  }

  //called when user types in the filter-field for saved meals
  function filterLocalMeals(event) {
    setLocalFilter(event.target.value);
  }

  //filters saved meals to render those that match user's search
  const filteredLocalMeals = savedMeals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(localFilter.toLowerCase())
  );

  //called when user clicks button to save a meal
  function saveMeal(newMeal) {
    //we only allow the user to save a meal if it is not already stored 
    if (!savedMeals.some((meal) => meal.idMeal === newMeal.idMeal)) {
      setSavedMeals((prevMeals) => [...prevMeals, newMeal]);
    } else {
      setShowToast(true);
    }
  }

  // called when user clicks button to delete a meal
  function deleteMeal(mealID) {
    const filtered = savedMeals.filter((meal) => meal.idMeal !== mealID);
    setSavedMeals(filtered);
  }

  //called whenever useState of savedMeals is updated, triggers re-render of saved meals
  useEffect(() => {
    //no need to check for duplicates before saving here since we do it in saveMeal()
    localStorage.setItem('meals', JSON.stringify(savedMeals));
  }, [savedMeals]);

  return (
    <>
      <TitleNavbar></TitleNavbar>

      <Container className="mt-4 pt-5 mb-5">
        <Row>
          <Col md={6} xl={6}>
            <SearchFilter filterRef={filterFieldRef} selectChange={getRecipes} filterChange={filterRecipes}></SearchFilter>
            <hr />
            <FoodList meals={filteredResults} saveButton={true} saveMeal={saveMeal}></FoodList>
          </Col>
          <Col md={6} xl={6}>
            <LocalSearchFilter setLocalFilter={filterLocalMeals} numRecipes={savedMeals.length}></LocalSearchFilter>
            <hr />
            <FoodList meals={filteredLocalMeals} saveButton={false} deleteMeal={deleteMeal}></FoodList>
          </Col>
        </Row>

        {/* Alert that is displayed when user tries to save an already stored meal */}
        <WarningToast show={showToast} onClose={() => setShowToast(false)} />
      </Container>
    </>
  );
}

export default App;
