import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';

//Modal component that functions as a more information dense display
export default function FoodItemModal({ show, meal, onHide }) {

  //Gets all ingredients from prop meal
  function ingredientsMethod() {
    let objectVals = Object.values(meal);
    let ingredientsTemp = [];

    for (let i = 9; i < 28; i++) {
      if (objectVals[i] !== null && !(objectVals[i].trim() === "")) {
        ingredientsTemp.push(objectVals[i]);
      }
    }
    return ingredientsTemp;
  }

  //Gets all measures from prop meal
  function measuresMethod() {
    let objectVals = Object.values(meal);
    let measuresTemp = [];

    for (let i = 29; i < 48; i++) {
      if (objectVals[i] !== null && !(objectVals[i].trim() === "")) {
        measuresTemp.push(objectVals[i]);
      }
    }
    return measuresTemp;
  }


  const YOUTUBE_ID = extractVideoID(meal.strYoutube);
  const measures = measuresMethod();
  const ingredients = ingredientsMethod();

  function extractVideoID(url) { //also known as: 'not writing regex for this'
    try {
      const youtubeURL = new URL(url);
      const params = new URLSearchParams(youtubeURL.search);
      return params.get('v');
    } catch (error) { //no video in response or invalid URL
      return null;
    }
  }

  return (

    <Modal show={show} onHide={onHide} centered size='xl'>
      <Modal.Header closeButton>
        <Modal.Title>{meal.strMeal}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack gap={3}>
          <Row>
            <Col md={12} lg={12}>
              {/* Conditional rendering based on if recipe has accompanying YouTube-video */}
              {YOUTUBE_ID && <div className='ratio ratio-16x9'>
                <iframe //only show embed if we have a valid video-id
                  src={"https://www.youtube.com/embed/" + YOUTUBE_ID}
                  title="YouTube Video"
                  allowFullScreen
                ></iframe>
              </div>}
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={12} lg={3}>
              <Image src={meal.strMealThumb} alt={meal.strMeal} fluid="true" roundedCircle />
            </Col>
            <Col >
              <Stack gap={0}>
                <h2>Ingredients</h2>
                <ul>
                  {/* Maps all ingredients to list, and attaches measure infront if exists */}
                  {ingredients.map((item, index) => <li key={index}> {measures[index]} {item}</li>)}
                </ul>

                <hr />

                <h2>Instructions</h2>

                <p>{meal.strInstructions}</p>
              </Stack>
            </Col>
          </Row>
        </Stack>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
