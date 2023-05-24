import FoodItem from "./components/FoodItem";
import SearchFilter from "./components/SearchFilter";
import FoodItemModal from "./components/FoodItemModal";
import React, { useState } from 'react';
import FoodList from "./components/FoodList";

function App() {
  
  const [modalShow, setModalShow] = useState(false);
  const [foodListAPI, setFoodListAPI] = useState([]);
  const [foodListSaved, setFoodListSaved] = useState([]);

  

  return (
    <>
      <h1>Recipe app</h1>
      <div>
        <SearchFilter></SearchFilter>

        <FoodList>

        </FoodList>
        
        <FoodItem saveButton={false} activateModal={() => setModalShow(true)}></FoodItem>
        
        <FoodItemModal show={modalShow} onHide={() => setModalShow(false)}></FoodItemModal>
      </div>
      
    </>
  );
}

export default App;
