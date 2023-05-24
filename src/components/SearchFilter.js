import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SearchFilter() {
  
  return (
    <div className='searchFilter'>
      <Form>
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control type='text' placeholder='Enter search here'/>
        </Form.Group> 

        <Form.Group>
          <Form.Label>Categories</Form.Label>
          <Form.Select>
            <option>Test 1</option>
            <option>Test 2</option>
          </Form.Select>
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
      
    </div>
  )
}
