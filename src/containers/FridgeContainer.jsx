
 import React from 'react';
 import { connect } from 'react-redux';
  import FridgeDisplay from '../components/FridgeDisplay.jsx';
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
 
 const FridgeContainer = props => (
  <div className="container">
    <div className="outerBox">
    <h1 id="header">I am fridge</h1>
      {/* <FridgeDisplay /> */}
    </div>
  </div>
);
//  export default connect(mapStateToProps, mapDispatchToProps)(FridgeContainer);
export default FridgeContainer;