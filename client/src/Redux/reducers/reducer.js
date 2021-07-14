
import axios from 'axios';
import {CLEAR_RECIPE_DETAIL, GET_NAME, GET_RECIPES, GET_RECIPE_DETAIL} from '../../Actions/actions'


const initialState = {
    recipesLoaded: [],
    recipeDetails: [],
    idRecipe:[],
    page:1
}

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipesLoaded:action.payload,

            }
        case GET_NAME:
            return{
                ...state,
                recipesLoaded:action.payload,
            }

            case GET_RECIPE_DETAIL:
                return{
                    ...state,
                    recipeDetails:action.payload
                };

                case CLEAR_RECIPE_DETAIL:
			return {
				...state,
				recipeDetails: []
			
			};
            
            default:
			return state;
    }


}

export default rootReducer;