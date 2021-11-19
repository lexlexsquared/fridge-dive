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
 import DiveContainer from './DiveContainer.jsx';
 import FridgeContainer from './FridgeContainer.jsx';
 import * as actions from '../actions/actions';
  import RecipesContainer from './RecipesContainer.jsx';
 
 
 const MainContainer = ()=> (
   <div className="container">
     <div className="outerBox">
       {/* <h1 id="header">FRIDGE DIVE</h1> */}
       <DiveContainer />
       <FridgeContainer />
       <RecipesContainer />
     </div>
   </div>
 );
 
//  export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
 export default (MainContainer);