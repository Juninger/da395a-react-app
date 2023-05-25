
import SearchFilter from "./components/SearchFilter";
import FoodList from "./components/FoodList";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MyRecipesInfo from './components/MyRecipesInfo';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function App() {

  const baseURL = 'https://www.themealdb.com/api/json/v1/1/';

  const [categories, setCategories] = useState([]); //maybe move this + useEffect to <SearchFilter>
  const [areas, setAreas] = useState([]); //maybe move this + useEffect to <SearchFilter>

  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const filterFieldRef = useRef();

  const [savedMeals, setSavedMeals] = useState([]);

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

  //called when user types in the filter-field
  function filterRecipes(event) {
    const text = event.target.value;

    const filtered = searchResults.filter((meal) =>
      meal.strMeal.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredResults(filtered);
  }

  const meals = [{
    "idMeal": "52771",
    "strMeal": "Spicy Arrabiata Penne",
    "strDrinkAlternate": null,
    "strCategory": "Vegetarian",
    "strArea": "Italian",
    "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    "strTags": "Pasta,Curry",
    "strYoutube": "https://www.youtube.com/watch?v=1IszT_guI08"
  },
  {
    "idMeal": "52771",
    "strMeal": "Spicy Arrabiata Penne",
    "strDrinkAlternate": null,
    "strCategory": "Vegetarian",
    "strArea": "Italian",
    "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    "strTags": "Pasta,Curry",
    "strYoutube": "https://www.youtube.com/watch?v=1IszT_guI08"
  }
  ]

  return (
    <Container>
      <h1>Recipe App</h1>
      <Row>
        <Col md={6} xl={6}>
          <SearchFilter filterRef={filterFieldRef} categories={categories} areas={areas} selectChange={getRecipes} filterChange={filterRecipes}></SearchFilter>
          <FoodList meals={filteredResults} saveButton={true}></FoodList>
        </Col>
        <Col md={6} xl={6}>
          <MyRecipesInfo></MyRecipesInfo>
          <FoodList meals={filteredResults} saveButton={true}></FoodList>
        </Col>
      </Row>
  </Container>
  );
}

export default App;
