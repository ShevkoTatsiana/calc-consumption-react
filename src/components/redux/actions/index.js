import {ADD_RESULT, DELETE_RESULT} from "./../actionTypes";

export const addResult = text => ({ type: ADD_RESULT, text });

export const deleteResult = () => ({type: DELETE_RESULT, text:''});