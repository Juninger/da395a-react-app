import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function FoodItemModal(props) {
  return (
    <Modal show={props.show}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          heaheh
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              Img?
            </Col>
            <Col xs={6} md={4}>
              Video?
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              Text
            </Col>
            <Col xs={6} md={4}>
              mer text
            </Col>
            <Col xs={6} md={4}>
              mer text
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
