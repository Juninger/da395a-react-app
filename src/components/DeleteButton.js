import React from 'react';
import Button from 'react-bootstrap/Button';

export default function DeleteButton({ deleteMeal }) {
  return (
    <div className='deleteButton mx-3 mb-3'>
      <Button variant='danger' className='col-md-12 mx-auto' onClick={deleteMeal}>Delete</Button>
    </div>
  )
}
