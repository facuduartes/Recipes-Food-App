import axios from 'axios';

import {
RECIPE_URL,
RECIPE_NAME,
RECIPE_ID
}from '../utils/constants';


export const GET_RECIPES='GET_RECIPES',GET_NAME="GET_NAME",GET_RECIPE_DETAIL="GET_RECIPE_DETAIL",
CLEAR_RECIPE_DETAIL='CLEAR_RECIPE_DETAIL';

export const getRecipes=()=>async (dispatch)=>{

    try {

        const res = await axios.get(RECIPE_URL);
        dispatch({ type: GET_RECIPES, payload: res.data });

    } catch (err) {
        console.log(err)
    }


}


export const getRecipeName=(name)=>async(dispatch)=>{


    try {

        const res = await axios.get(RECIPE_NAME+name);
        dispatch({ type: GET_NAME, payload: res.data });

    } catch (err) {
        console.log(err)
        dispatch({type: GET_NAME, payload: []})
    }



}


export const getRecipeDetail=(id)=>async(dispatch)=>{



    try {

        const res = await axios.get(RECIPE_ID+id);
        dispatch({ type: GET_RECIPE_DETAIL, payload: res.data });

    } catch (err) {
        console.log(err)
        dispatch({type: GET_RECIPE_DETAIL, payload: []})
    }


}

export const clearRecipeDetail=()=>(dispatch)=>{

dispatch({type:CLEAR_RECIPE_DETAIL});


}