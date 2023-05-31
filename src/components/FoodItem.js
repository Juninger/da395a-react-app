import React from 'react';
import Card from 'react-bootstrap/Card';
import SaveButton from './SaveButton';
import DeleteButton from './DeleteButton';
import { useState } from 'react';
import FoodItemModal from './FoodItemModal';
import axios from 'axios';

//ListItem component that is used to populate both lists
export default function FoodItem({ meal, saveButton, saveMeal, deleteMeal }) {
  const [showModal, setShowModal] = useState(false);
  const [mealDetails, setMealDetails] = useState(null);

  //Method that deals with showing the modal, by getting full meal-object from API. 
  function handleItemClick() {
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    const id = meal.idMeal;

    axios.get(url + id) //fetches specific meal with more details
      .then((response) => {
        setMealDetails(response.data.meals[0]);
        setShowModal(true);
      })
      .catch((error) => {
        console.error("Data could not be fetched from API for this item. Error message: " + error)
      });
  };

  //Hides modal
  function hideModal() {
    setShowModal(false);
  };

  return (
    <>
      <Card style={{ cursor: "pointer" }}>
        <Card.Body onClick={handleItemClick}>
          <Card.Title className='mb-3'>{meal.strMeal}</Card.Title>
          <Card.Img src={meal.strMealThumb}></Card.Img>
        </Card.Body>
        {saveButton ?
          <SaveButton saveMeal={() => saveMeal(meal)} meal={meal} /> :
          <DeleteButton deleteMeal={() => deleteMeal(meal.idMeal)} />}
      </Card>
      {/*Wont show modal until meal state is populated by handleItemClick-method */}
      {mealDetails && (
        <FoodItemModal show={showModal} onHide={hideModal} meal={mealDetails}></FoodItemModal>
      )}
    </>
  )
}
