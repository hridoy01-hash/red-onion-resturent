import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MealDetails = () => {
   const {foodId} = useParams();
   const [meals,setMeals] = useState([]);
   
  useEffect(()=>{
    fetch('/fakeData.json')
    .then(response => response.json())
    .then(data =>{const meals=data.find(meal=>(meal.id) == foodId)
      setMeals(meals)
    });

  },[]);
  

/* const selectMeal = meals.find;  */

    return (
        <div>
        <p>food id {foodId}</p>
        <h3>Food Name : {meals?.foodName}</h3>
        <p>{meals?.discription}</p>
        </div>
    );
};

export default MealDetails;