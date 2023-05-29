import React from 'react';
import Form from 'react-bootstrap/Form';

export default function MyRecipesInfo({ setLocalFilter }) {

  return (
    <Form.Group>
      <Form.Label>Filter results</Form.Label>
      <Form.Control type='text' placeholder='Enter a meal...' onChange={setLocalFilter}></Form.Control>
    </Form.Group>)
}
