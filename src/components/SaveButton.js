import React from 'react';
import Button from 'react-bootstrap/Button';

export default function SaveButton({saveMeal}) {

  return (
    <div className='saveButton mx-3 mb-3'>
      <Button variant='success' className='col-md-12 mx-auto' onClick={saveMeal}>Save</Button>
    </div>
  )
}
