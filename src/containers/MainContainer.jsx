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
//  import TotalsDisplay from '../components/TotalsDisplay';
 import DiveContainer from './DiveContainer.jsx';
 import FridgeContainer from './FridgeContainer.jsx';
 import * as actions from '../actions/actions';
  import RecipesContainer from './RecipesContainer.jsx';
 
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
 
 const MainContainer = (props )=> (
   <div className="container">
     <div className="outerBox">
       {/* <h1 id="header">I am main</h1> */}
       <DiveContainer {...props}/>
       <FridgeContainer />
       <RecipesContainer {...props}/>
     </div>
   </div>
 );
 
 export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
//  export default (MainContainer);