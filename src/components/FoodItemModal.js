import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


export default function FoodItemModal({show, data, onHide}) {
  return (
    <Modal show={show} className='modal-xl'>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {data.strMeal}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={6} md={6}>
              <Image src={data.strMealThumb} fluid='true'/>
            </Col>
            <Col xs={6} md={6}>
              <iframe class='responsive-iframe' src={data.strYoutube} height='75%' width='100%' title="YouTube video player"></iframe>
            </Col>
          </Row>

          <Row>
              {data.strInstructions}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
