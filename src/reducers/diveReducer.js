/**
 * ************************************
 *
 * @module  diveReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

 import * as types from '../constants/actionTypes';

 const initialState = {
  ing1: '',
  ing2: '',
  ing3: '',
  measure1: [],
  measure2: [],
  measure3: [],
  getRecipe: false,
  diveIn: false,
 };
 
 const diveReducer = (state = initialState, action) => {
   switch (action.type) {
  
 
     default:
       return state;
   }
 };
 
 export default diveReducer;
 