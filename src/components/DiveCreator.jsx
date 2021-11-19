import React, { Component, useState } from 'react';
import mealDBIngs from '../../dump/mealDBIngs.JSON';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import 'regenerator-runtime/runtime'

// import Select from '@mui/material/Select';
// const ingsJSON = JSON.parse(mealDBIngs);
// console.log('ingsJSON', ingsJSON)
const mapStateToProps = ({
  dive: { 
    ingredients,
    ing1, 
    ing2, 
    ing3, 
    getRecipes,
    recipesIdArray,
    diveIn,
    recipeFetch,
    dived,
  },
}) => ({
  ingredients,
 ing1, 
 ing2, 
 ing3, 
 getRecipes, 
 recipesIdArray,
 diveIn,
 recipeFetch,
 dived,
});

const mapDispatchToProps = dispatch => ({
  getRecipes: (data) => dispatch(actions.getRecipes(data)),
  // diveIn: () => dispatch(actions.diveIn()),
  updateQuery: (ing1) => dispatch(actions.updateQuery(ing1)),
});
// componentDidMount() => {
//   this.fetchData();
// }
console.log('mealDBIngs', mealDBIngs)
/*
ReferenceError: regeneratorRuntime is not defined
    at _getData
*/

const DiveCreator = ( props) => {
  const ingredientsOptions = [];
   mealDBIngs.meals.forEach((mealDBIngs, idx) => {ingredientsOptions.push(
      <option key={idx} value={idx}>{mealDBIngs.strIngredient}</option>
    );
    });

  const handleSelect = (event) => {

    // console.log('selected ', event)
    props.updateQuery(event.target.value);
  };




  const recipeClick = (event) => {
    // console.log('selected ', event)
    getData(props.ing1)
  }
  async function getData(ing) {
    try{
    const response = await fetch(`/api/recipes/${ing}`);
    const data = await response;
  
    // store the data into our books variable
    props.getRecipes(data) ;}
    catch(error) {
      console.log(error)
    }
  }
  return ( 
    <div className="diveBox">
      <section>
      <header><h2>DIVE INTO YOUR FRIDGE.</h2>
        
      <h3>Have ingredients wasting away in your fridge? Select 1-3 ingredients.</h3>
      <h4>Find ways to use em, not trash em.</h4></header>
        
      <article><strong>Select Ingredients to save from TRASHDOM</strong></article>

        <div className="ingSelector">
        <label><strong>Rescue 1. Just 1:</strong></label>
        <select label="ing1" id="addIngSelect" value={props.ing1} onChange={handleSelect} > {ingredientsOptions} </select>
        <label><strong>Swoop in for 2:</strong></label>
        <select name="ing2" id="addIngSelect">{ingredientsOptions}</select>
        <label><strong>Feeling extra save-y? Liberate 3:</strong></label>
        <select name="ing3" id="addIngSelect">{ingredientsOptions}</select>
        </div>
      </section>

      <div id="actionButtons">
        <section>
        <br></br>  
        <label>View recipes to see fridge-belly solutions.</label>
        <br></br>
        <button /*id="get-recipes"*/ onClick={recipeClick} /*disabled={recipeFetch}*/>View Recipes</button>
        </section>
        <section>
        <label>DIVE IN to commit to cooking your selected recipes.</label>
        <br></br>
        <button id="dive-in" /*onClick={this.fetchData} /*disabled={dived}*/>DIVE IN</button>
        </section>
      <br></br>
      </div>
    </div>
    )
}

export default connect (mapStateToProps, mapDispatchToProps)(DiveCreator);
