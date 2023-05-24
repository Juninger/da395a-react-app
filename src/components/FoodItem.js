import React from 'react';
import Card from 'react-bootstrap/Card';
import SaveButton from './SaveButton';
import DeleteButton from './DeleteButton';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import FoodItemModal from './FoodItemModal';


export default function FoodItem({item, saveButton, activateModal}) {
  const [modalShow, setModalShow] = useState(false);
  const title = item.strMeal;
  const description = item.strInstructions;
  const thumbnail = item.strMealThumb;

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Body>{description}</Card.Body>
          <Card.Img src={thumbnail}></Card.Img>
          {saveButton ? <SaveButton/> : <DeleteButton/>} 
          <Button variant='secondary' onClick={() => setModalShow(true)}>Show recipe</Button>
        </Card.Body>
      </Card>
      <FoodItemModal show={modalShow} data={item} onHide={() => setModalShow(false)}></FoodItemModal>
    </>
  )

}
