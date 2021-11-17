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
 import fridgeReducer from './fridgeReducer';
 import diveReducer from './diveReducer';
 import recipeReducer from './recipeReducer';

 export default combineReducers({
   fridge: fridgeReducer,
   dive: diveReducer,
   recipe: recipeReducer
 });
 