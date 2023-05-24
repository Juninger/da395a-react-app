import React from 'react'
import FoodItem from './FoodItem';

export default function FoodList({ meals, saveButton }) {

  return (
    <ul>
      {meals.map((meal) => (
        <FoodItem key={meal.strMeal} meal={meal} saveButton={saveButton}></FoodItem>))
      }
    </ul>

  )
}