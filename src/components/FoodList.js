import React from 'react'
import FoodItem from './FoodItem';
import Stack from 'react-bootstrap/Stack';

export default function FoodList({ meals, saveButton }) {

  return (
    <>
    <Stack gap={3}>
      {meals.map((meal) => (
        <FoodItem key={meal.strMeal} meal={meal} saveButton={saveButton}></FoodItem>))
      }
    </Stack>
    </>
  )
}