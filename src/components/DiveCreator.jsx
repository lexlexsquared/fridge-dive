import React, { Component, useState } from 'react';
import mealDBIngs from '../../dump/mealDBIngs.JSON';
// const ingsJSON = JSON.parse(mealDBIngs);
// console.log('ingsJSON', ingsJSON)
console.log('mealDBIngs', mealDBIngs)
const DiveCreator = () => {

  const ingredientsOptions = [];
   mealDBIngs.meals.forEach((mealDBIngs, idx) => {ingredientsOptions.push(
      <option key={idx} value={idx}>{mealDBIngs.strIngredient}</option>
    );
    });

  return (  
    <div className="diveBox"><section>
      <header><h2>DIVE INTO YOUR FRIDGE.</h2>
      
      <h3>Have ingredients wasting away in your fridge? Select 1-3 ingredients.</h3>
      <h4>Find ways to use em, not trash em.</h4></header>
      
      <article><strong>Select Ingredients to save from TRASHDOM</strong></article>

      <div className="ingSelector">
      <label><strong>Rescue 1. Just 1:</strong></label>
      <select name="ing1" id="addIngSelect">{ingredientsOptions}</select>
      <label><strong>Swoop in for 2:</strong></label>
      <select name="ing2" id="addIngSelect">{ingredientsOptions}</select>
      <label><strong>Feeling extra save-y? Liberate 3:</strong></label>
      <select name="ing3" id="addIngSelect" >{ingredientsOptions}</select>

      </div>
    
    </section>

    <div id="actionButtons">
    <section>
    <br></br>  
    <label>View recipes to see fridge-belly solutions.</label>
    <br></br>
    <button type="button">View Recipes</button>
    </section>
    <section>
    <label>DIVE IN to commit to cooking your selected recipes.</label>
    <br></br>
    <button type="button">DIVE IN</button>
    </section>
    <br></br>
    </div>
    </div>
    )
}

export default DiveCreator;
