import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export default function FoodItemModal({ show, meal, onHide }) {

  const YOUTUBE_ID = extractVideoID(meal.strYoutube);

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

    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{meal.strMeal}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={6} md={6}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </Col>
          <Col xs={6} md={6}>
            {YOUTUBE_ID && <iframe //only show embed if we have a valid video-id
              width="100%"
              height="315"
              src={"https://www.youtube.com/embed/" + YOUTUBE_ID}
              title="YouTube Video"
              allowFullScreen
            ></iframe>}
          </Col>
        </Row>
        <Row>
          <p>{meal.strInstructions}</p>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
