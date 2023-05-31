import React from 'react'
import Form from 'react-bootstrap/Form';

//Header component for recipe list, includes dropdown and filtering and recieves several props
export default function SearchFilter({ categories, areas, selectChange, filterChange, filterRef }) {

  function stringifyObj(object) {
    return JSON.stringify(object)
  }

  return (
    <>
      <h5>Search</h5>
      <Form.Group>
        <Form.Label>What do you want to eat?</Form.Label>
        <Form.Select defaultValue={'Select an option'} onChange={selectChange}>
          {/* Populates dropdown menu with categories and areas */}
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

      <Form.Group>
        <Form.Label>Filter results</Form.Label>
        <Form.Control ref={filterRef} type='text' placeholder='Enter a meal...' onChange={filterChange}></Form.Control>
      </Form.Group>

    </>
  )
}
