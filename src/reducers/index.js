/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

 import { combineReducers } from 'redux';
 import diveReducer from './diveReducer';

 export default combineReducers({
  //  fridge: fridgeReducer,
   dive: diveReducer,
  //  recipe: recipeReducer
 });
 