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
 
 const DiveContainer = props => (
   <div className="container">
     <div className="outerBox">
       <h1 id="header">I am Dive</h1>
       <DiveCreator />
     </div>
   </div>
 );
 
//  export default connect(mapStateToProps, mapDispatchToProps)(DiveContainer);
  
 export default (DiveContainer);