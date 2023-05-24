import React from 'react';
import Card from 'react-bootstrap/Card';
import SaveButton from './SaveButton';
import DeleteButton from './DeleteButton';
import Button from 'react-bootstrap/Button'


export default function FoodItem( props ) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Recipe name</Card.Title>
          <Card.Body>Recipe info</Card.Body>
          <Card.Img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.w8GN82aamP9fvPiFRjKpiAHaEU%26pid%3DApi&f=1&ipt=904c262a09dd5f042782b17270bf07cbbbd45f12ce4f97b845823de97127c303&ipo=images'></Card.Img>
          {props.saveButton ? <SaveButton/> : <DeleteButton/>} 
          <Button variant='secondary' onClick={props.activateModal}>Show recipe</Button>
        </Card.Body>
      </Card>
    </>
  )

}
