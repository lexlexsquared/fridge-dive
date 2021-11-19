/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

 import axios from 'axios';
 import * as types from '../constants/actionTypes';

 export const getRecipes = data => ({
   type: types.GET_RECIPES,
   payload: data,
 });
 
 export const diveIn = id => ({
   type: types.DIVE_IN,
   payload: data,
 });

 export const updateQuery = data => ({
   type: types.UPDATE_QUERY,
   payload: data,
 })
 