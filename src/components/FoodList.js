import React from 'react'
import FoodItem from './FoodItem';
import Stack from 'react-bootstrap/Stack';

//FoodList component that contains our FoodItem components, passes several props on to children
export default function FoodList({ meals, saveButton, saveMeal, deleteMeal }) {

  return (
    <>
      <Stack gap={3}>
        {meals.map((meal) => (
          <FoodItem key={meal.strMeal} meal={meal} saveButton={saveButton} saveMeal={saveMeal} deleteMeal={deleteMeal}></FoodItem>))
        }
      </Stack>
    </>
  )
}