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
    <div><section>
      <header><h4>I am here, Dive Creator</h4></header>
      <article>Enter Ingredients:</article>
      <label>Ingredient 1:</label>
      <select name="ing1" >{ingredientsOptions}</select>
      <label>Ingredient 2:</label>
      <select name="ing2" >{ingredientsOptions}</select>
      <label>Ingredient 3:</label>
      <select name="ing3" >{ingredientsOptions}</select>
    </section>
    <section>
    <button type="button">View Recipes</button>
    </section>
    <section>
    <button type="button">Dive In</button>
    </section>
    </div>
    )
}

export default DiveCreator;
