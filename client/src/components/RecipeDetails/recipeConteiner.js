import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeDetail,clearRecipeDetail } from '../../Actions/actions';
import { useEffect } from 'react';
import Recipe from './recipe';

export const  RecipeConteiner=(props)=> {

console.log(props)
    const dispatch=useDispatch();

    const recipeDetails= useSelector(state=>state.recipeDetails)
    console.log(recipeDetails)
    useEffect(() => {
		dispatch(getRecipeDetail(props.match.params.id));
       return () => dispatch(clearRecipeDetail()) 
	}, [dispatch]);



    return (
        <div>
           <Recipe
           id={recipeDetails.id}
           image={recipeDetails.image}
           title={recipeDetails.title}
           DietTypes={recipeDetails.DietTypes}
           summary={recipeDetails.summary}
           readyIn={recipeDetails.readyIn}
           likes={recipeDetails.likes}
           health={recipeDetails.health}
           instructions={recipeDetails.instructions}
           />
        </div>
    );
}

export default RecipeConteiner;