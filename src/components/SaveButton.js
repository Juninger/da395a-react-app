import React from 'react';
import Button from 'react-bootstrap/Button';

//Button component functioning as a save button to add recipe to saved recipe list
export default function SaveButton({ saveMeal }) {

  return (
    <div className='saveButton mx-3 mb-3'>
      <Button variant='success' className='w-100' onClick={saveMeal}>Save</Button>
    </div>
  )
}
