import React from 'react';
import Button from 'react-bootstrap/Button';

export default function SaveButton({ saveMeal }) {

  return (
    <div className='saveButton mx-3 mb-3'>
      <Button variant='success' className='w-100' onClick={saveMeal}>Save</Button>
    </div>
  )
}
