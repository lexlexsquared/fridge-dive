/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

 import React from 'react';
 import { connect } from 'react-redux';
 import DiveCreator from '../components/DiveCreator.jsx';

 import * as actions from '../actions/actions';
 
 const mapStateToProps = ({
  dive: { ing1, ing2, ing3, getRecipes, diveIn },
}) => ({
   ing1, 
   ing2, 
   ing3, 
   getRecipes, 
   diveIn
});

const mapDispatchToProps = dispatch => ({
  getRecipes: () => dispatch(actions.getRecipes()),
  diveIn: () => dispatch(actions.diveIn())
});
 
 const DiveContainer = props => (
   <div className="container">
     <div className="outerBox">
       <h1 id="header"><strong>FRIDGE DIVE.</strong></h1>
       <h2 id="header">Wasting food sucks. It's a waste of money and makes Mama Earth unhappy.</h2> 
       <h2>Let's change that.</h2>
       <DiveCreator {...props}/>
     </div>
   </div>
 );
 
 export default connect(mapStateToProps, mapDispatchToProps)(DiveContainer);
  
//  export default (DiveContainer);