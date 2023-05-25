import React from 'react';
import Card from 'react-bootstrap/Card';
import SaveButton from './SaveButton';
import DeleteButton from './DeleteButton';
import { useState } from 'react';
import FoodItemModal from './FoodItemModal';
import axios from 'axios';
import Stack from 'react-bootstrap/Stack';


export default function FoodItem({ meal, saveButton }) {
  const [showModal, setShowModal] = useState(false);
  const [mealDetails, setMealDetails] = useState(null);

  function handleItemClick() {
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    const id = meal.idMeal;

    axios.get(url + id) //fetches specific meal with more details
      .then((response) => {
        console.log(response.data.meals[0]);
        setMealDetails(response.data.meals[0]);
        setShowModal(true);
      });
  };

  function hideModal() {
    setShowModal(false);
  };

  return (
    <>
        <Card >
          <Card.Body onClick={handleItemClick}>
            <Card.Title className='mb-3'>{meal.strMeal}</Card.Title>
            <Card.Img src={meal.strMealThumb}></Card.Img>
          </Card.Body>
            {saveButton ? <SaveButton /> : <DeleteButton />}
        </Card>
      {mealDetails && (
        <FoodItemModal show={showModal} onHide={hideModal} meal={mealDetails}></FoodItemModal>
      )}
    </>
  )
}
