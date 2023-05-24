
import FoodItem from "./components/FoodItem";
import SearchFilter from "./components/SearchFilter";
import FoodItemModal from "./components/FoodItemModal";
import FoodList from "./components/FoodList";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MyRecipesInfo from './components/MyRecipesInfo';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function App() {

  // const firstRender = useRef(true); //SHOULD be used instead of renderCount, temporary fix for strict-mode double rendering
  // const renderCount = useRef(0);

  const baseURL = 'https://www.themealdb.com/api/json/v1/1/';
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  // const [selectedSearch, setSelectedSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get(baseURL + 'list.php?c=list') //fetches list of categories
      .then((response) => {
        setCategories(response.data.meals);
      });

    axios.get(baseURL + 'list.php?a=list') //fetches list of areas
      .then((response) => {
        setAreas(response.data.meals);
      });
  }, []);

  // Called when user changes selected value in the list of categories / areas (in <SearchFilter>)
  function getRecipes(event) {
    const newSelectedOption = event.target.value;
    
    // setSelectedSearch(newSelectedOption);
  }

  
  // useEffect(() => {
  //   /* SHOULD be used instead of renderCount solution below, temporary fix for strict-mode double rendering
  //   if (firstRender.current) {
  //     firstRender.current = false;
  //   } else {
  //     console.log("new value of selsearch:", selectedSearch);
  //   }
  //   */

  //   renderCount.current += 1;

  //   if (renderCount.current > 2) {
  //     console.log("Calling the API with", selectedSearch);
  //   }

  // }, [selectedSearch]);
  




  
  const [modalShow, setModalShow] = useState(false);
  const [foodListAPI, setFoodListAPI] = useState([]);
  const [foodListSaved, setFoodListSaved] = useState([]);
  const [modalData, setModalData] = useState(null);

  const updateModalData = (item) => {
    setModalData(item);
    console.log(item);
    console.log(modalData);
    setModalShow(true);
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
        <Col md={12} xl={6}>
          <div>
            <SearchFilter categories={categories} areas={areas} selectChange={getRecipes}></SearchFilter>
            <FoodList items={meals} saveButton={true} activateModal={() => updateModalData()}></FoodList>
          </div>
        </Col>
        <Col md={12} xl={6}>
          <MyRecipesInfo></MyRecipesInfo>
          <FoodList items={meals} saveButton={true} activateModal={() => updateModalData()}></FoodList>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
