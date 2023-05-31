import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


//Header component for recipe list, includes dropdown and filtering and recieves several props
export default function SearchFilter({ selectChange, filterChange, filterRef }) {

  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const baseURL = 'https://www.themealdb.com/api/json/v1/1/';

  useEffect(() => {
    axios.get(baseURL + 'list.php?c=list') //fetches list of categories
      .then((response) => {
        setCategories(response.data.meals);
      })
      .catch((error) => {
        console.error("Fetching categories went wrong. Error message: " + error);
      });


    axios.get(baseURL + 'list.php?a=list') //fetches list of areas
      .then((response) => {
        setAreas(response.data.meals);
      }).catch((error) => { console.error("Fetching areas went wrong. Error message: " + error) });
  }, []); //no dependencies ==> only called ONCE on initial render (twice during Strict-mode) 

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
        <Form.Label>Filter meals</Form.Label>
        <Form.Control ref={filterRef} type='text' placeholder='Enter a meal...' onChange={filterChange}></Form.Control>
      </Form.Group>

    </>
  )
}
