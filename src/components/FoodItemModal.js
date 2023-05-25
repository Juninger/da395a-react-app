import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import { Container } from 'react-bootstrap';


export default function FoodItemModal({ show, meal, onHide }) {

  const YOUTUBE_ID = extractVideoID(meal.strYoutube);
  const [measure, setMeasures] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  function extractVideoID(url) { //also known as: 'not writing regex for this'
    try {
      const youtubeURL = new URL(url);
      const params = new URLSearchParams(youtubeURL.search);
      return params.get('v');
    } catch (error) { //no video in response or invalid URL
      return null;
    }
  }

  const ingredientsAndMeasures1 = () => {
    let objectVals = Object.values(meal);
    let ingredients = [];
    let measures = [];
    
    for (let i = 9; i < 28; i++) {
      if(objectVals[i] !== "" && objectVals[i] !== null) {
        ingredients.push(<li><span>{objectVals[i]}</span></li>);
        measures.push(<li><span>{objectVals[i+20]}</span></li>);
      }
    }
    setIngredients(ingredients);
    setMeasures(measures);
  }

  const ingredientsAndMeasures = () => {
    let objectVals = Object.values(meal);
    let ingredients = [];
    let measures = [];
    
    for (let i = 9; i < 28; i++) {
      if(objectVals[i] !== "" && objectVals[i] !== null) {
        ingredients.push(<li><span>{objectVals[i+20]}</span><span>{objectVals[i]}</span></li>);
      }
    }
    
    setIngredients(ingredients);
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
              {YOUTUBE_ID && <div className='ratio ratio-16x9'>
                <iframe //only show embed if we have a valid video-id
                src={"https://www.youtube.com/embed/" + YOUTUBE_ID}
                title="YouTube Video"
                allowFullScreen
                ></iframe>
              </div>}
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col md={12} lg={3}>
              <Image src={meal.strMealThumb} alt={meal.strMeal} fluid="true" roundedCircle/>
              {/*<img src={meal.strMealThumb} alt={meal.strMeal} />*/}
            </Col>
            <Col >
              <Stack>
                <h2>Ingredients</h2>
                <ul>
                  <Container>
                    {ingredientsAndMeasures1}
                    {ingredients}
                    {measure}
                  </Container>
                </ul>
                <hr></hr>

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
