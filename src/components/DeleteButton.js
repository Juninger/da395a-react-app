import React from 'react';
import Button from 'react-bootstrap/Button';

//DeleteButton component, gets a method in props that deletes from list
export default function DeleteButton({ deleteMeal }) {
  return (
    <div className='deleteButton mx-3 mb-3'>
      <Button variant='danger' className='w-100' onClick={deleteMeal}>Delete</Button>
    </div>
  )
}
