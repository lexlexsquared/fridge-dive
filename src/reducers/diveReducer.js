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
  ingredients: {},
  ing1: '',
  ing2: '',
  ing3: '',
  measure1: [],
  measure2: [],
  measure3: [],
  recipeFetch: false,
  dived: false,
  recipesIdArray:[],
  recipesLinkArray:[],
  measurements: [],
 };
 

 /*
 updateQuery:1. let query = 
 if ing1 = truthy -> join replace " " with "_" 
 if id2 = truthy, -> join replace " " with "_"
 if id3 = truthy, -> join replace " " with "_"
 
 GET RECIPES: 
 let query = '';
1. if ing1 = truthy && query === '' -> concat to query else concat ',' + ing1 to query
if ing2 = truthy && query === '' -> concat to query else concat ',' + ing1 to query
if ing3 = truthy && query === '' -> concat to query else concat ',' + ing1 to query

 submit query to API

 map to props, for each mealId push to recipeIdArray, mealLink push to recipesLinkArray 
 --> will need recipe modal to display html link using mealId.
 return ...state, recipeFetch = true
 */
 const diveReducer = (state = initialState, action) => {
   switch (action.type) {
    case types.UPDATE_QUERY:
      // const newIngredients = (action.payload).replace(' ', '_')
      console.log(action.payload); //this is a number corresponding to my JSON object index.
      return {
        ...state, 
        ing1: action.payload
      } 
      break;
    case types.GET_RECIPES:
    //   // const newIngredients = (action.payload).replace(' ', '_')
      console.log(action.payload); //this is a number corresponding to my JSON object index.
      return {
        ...state, 
      }
      break;      
     default:
       return state;
   }
 };
 
 export default diveReducer;
 