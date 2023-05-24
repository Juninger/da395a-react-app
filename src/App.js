import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SearchFilter from './components/SearchFilter';
import FoodList from './components/FoodList';
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
  


  return (
    <Container>
      <h1>Recipe App</h1>
      <Row>
        <Col md={12} xl={6}>
          <div>
            <SearchFilter categories={categories} areas={areas} selectChange={getRecipes}></SearchFilter>
            <FoodList></FoodList>
          </div>
        </Col>
        <Col md={12} xl={6}>
          <MyRecipesInfo></MyRecipesInfo>
          <FoodList></FoodList>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
