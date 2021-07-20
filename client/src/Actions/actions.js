import axios from 'axios';
import { useSelector } from 'react-redux';
import GetRecipesOrder from '../Controllers/GetRecipesOrder';

import {
RECIPE_URL,
RECIPE_NAME,
RECIPE_ID,
DIET_URL
}from '../utils/constants';


export const GET_RECIPES='GET_RECIPES',
GET_NAME="GET_NAME",
GET_RECIPE_DETAIL="GET_RECIPE_DETAIL",
CLEAR_RECIPE_DETAIL='CLEAR_RECIPE_DETAIL',
RECIPES_ORDER="RECIPES_ORDER",
GET_DIETS="GET_DIETS",
DIETS_ORDER="DIETS_ORDER",
LOADING="LOADING"

export const getRecipes=()=> {return async (dispatch)=>{
    dispatch({type: LOADING});
    try {

        const res = await axios.get(RECIPE_URL);
      return  dispatch({ type: GET_RECIPES, payload: res.data });

    } catch (err) {
        console.log(err)
    }


}
};

export const getRecipeName=(name)=>async(dispatch)=>{

    dispatch({type: LOADING});
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

dispatch({type:CLEAR_RECIPE_DETAIL,payload:[]});


}




export const orderRecipes=(types)=>(dispatch)=>{

   

dispatch({type:RECIPES_ORDER,payload: types})


}


export const getDiets=()=>async (dispatch)=>{



    try {

        const res = await axios.get(DIET_URL);
        dispatch({ type: GET_DIETS, payload: res.data });

    } catch (err) {
        console.log(err);
        dispatch({type: GET_DIETS, payload: []})
    }

}

export const orderDiets = (type) => (dispatch) => {
	dispatch({type: DIETS_ORDER, payload: type});
};