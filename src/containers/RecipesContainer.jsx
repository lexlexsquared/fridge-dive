
 import React from 'react';
 import { connect } from 'react-redux';
  import RecipeCard from '../components/RecipeCard.jsx';
 import * as actions from '../actions/actions';

//  const mapStateToProps = ({
//     recipes, dive
//  }) => ({
//     strMeal: recipes.strMeal,
//     idMeal: recipes.idMeal,
//     ing1: dive.ing1,
//     ing2: dive.ing2,
//     ing3: dive.ing3,
//     ing1Meas: dive.ing1Meas,
//     ing2Meas: dive.ing2Meas,
//     ing3Meas: dive.ing3Meas,
//  });
 
 const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
 
 const RecipesContainer = (props) => (
  <div className="container">
    <div className="recipeBoxOuter">
    <h1 id="header">RECIPES. Cook and get DEM IN YOUR BELLY!</h1>
      <RecipeCard 
      // strMeal={props.strMeal}
      // idMeal={props.idMeal}
      // ing1={props.ing1}
      // ing2={props.ing2}
      // ing3={props.ing3}
      // ing1Meas={props.ing1Meas}
      // ing2Meas={props.ing2Meas}
      // ing3Meas={props.ing3Meas}
      />
    </div>
  </div>
);
//  export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
 export default (RecipesContainer);