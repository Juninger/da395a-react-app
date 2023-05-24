import React from 'react'
import Form from 'react-bootstrap/Form';

export default function SearchFilter({ categories, areas, selectChange }) {

  function stringifyObj(object) {
    return JSON.stringify(object)
  }

  return (
    <>
      <Form.Group>
        <Form.Label>Categories</Form.Label>
        <Form.Select defaultValue={'Select an option'} onChange={selectChange}>
          <option disabled hidden>Select an option</option>
          <optgroup label="Categories">
            {categories.map(category =>
              <option value={stringifyObj(category)} label={category.strCategory} key={category.strCategory}></option>
            )}
          </optgroup>

          <optgroup label="Areas">
            {areas.map(area =>
              <option value={stringifyObj(area)} label={area.strArea} key={area.strArea}></option>
            )}
          </optgroup>
        </Form.Select>
      </Form.Group>

    </>
  )
}
