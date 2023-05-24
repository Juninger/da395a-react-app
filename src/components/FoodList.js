import React from 'react'
import FoodItem from './FoodItem';

export default function FoodList({items, saveButton, activateModal}) {
  
  return (
    <ul>
    {items.map(item => 
      (<FoodItem item={item} saveButton={saveButton} activateModal={activateModal}></FoodItem>))}
    </ul>

  )
}