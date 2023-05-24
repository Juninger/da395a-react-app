import FoodItem from "./components/FoodItem";
import SearchFilter from "./components/SearchFilter";
import FoodItemModal from "./components/FoodItemModal";
import React, { useState } from 'react';
import FoodList from "./components/FoodList";

function App() {
  
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
    <>
      <h1>Recipe app</h1>
      <div>
        <SearchFilter></SearchFilter>

        <FoodList items={meals} saveButton={true} activateModal={() => updateModalData()}></FoodList>
        
      </div>      
    </>
  );
}

export default App;
