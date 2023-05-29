import React from 'react';
import Form from 'react-bootstrap/Form';

export default function MyRecipesInfo({ setLocalFilter, numRecipes }) {

  return (
    <>
      <h5>Your recipes</h5>
        <Form.Group>
          <Form.Label>Filter results</Form.Label>
          <Form.Control type='text' placeholder='Enter a meal...' onChange={setLocalFilter}></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Number of saved recipes</Form.Label>
          <Form.Control
            type="text"
            placeholder={numRecipes}
            aria-label="Disabled input"
            disabled
            readOnly
          />
        </Form.Group>
    </>
  )
}
