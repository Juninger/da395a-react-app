import React from 'react'
import Form from 'react-bootstrap/Form';

export default function SearchFilter({ categories }) {
  return (
    <>
      <h5>Categories</h5>
      <Form.Select aria-label="Default select example">
        <option disabled>CATEGORIES</option>
        {categories.map(category =>
          <option key={category.strCategory}>{category.strCategory}</option>
        )}
      </Form.Select>
    </>
  )
}
