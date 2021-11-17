
 import React from 'react';
 import { connect } from 'react-redux';
  import RecipeCard from '../components/RecipeCard.jsx';
 import * as actions from '../actions/actions';

//  const mapStateToProps = ({
//   //  markets: { totalCards, totalMarkets, synced },
//  }) => ({
//   //  totalCards,
//   //  totalMarkets,
//   //  synced,
//  });
 
//  const mapDispatchToProps = dispatch => ({
//   //  syncMarkets: () => dispatch(actions.syncMarkets()),
//  });
 
 const RecipesContainer = (/*props*/) => (
  <div className="container">
    <div className="outerBox">
    <h1 id="header">I am recipes</h1>
      <RecipeCard />
    </div>
  </div>
);
//  export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
 export default (RecipesContainer);