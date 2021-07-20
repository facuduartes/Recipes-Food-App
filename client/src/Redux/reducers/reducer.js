
import axios from 'axios';
import { CLEAR_RECIPE_DETAIL, DIETS_ORDER, GET_DIETS, GET_NAME, GET_RECIPES, GET_RECIPE_DETAIL, RECIPES_ORDER,LOADING } from '../../Actions/actions'
import GetDietsOrder from '../../Controllers/GetDietsOrder';
import GetRecipesOrder from '../../Controllers/GetRecipesOrder'

const initialState = {
    recipesLoaded: [],
    recipeDetails: [],
    idRecipe: [],
    page: 1,
    diets: [],
    recipesFilter: [],
    loading:false
}

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                loading:false,
                recipesLoaded: action.payload,
              recipesFilter:action.payload
            }
        case GET_NAME:
            return {
                ...state,
                loading:false,
                recipesLoaded: action.payload,
            }

        case GET_RECIPE_DETAIL:
            return {
                ...state,
                recipeDetails: action.payload
            };

        case CLEAR_RECIPE_DETAIL:
            return {
                ...state,
                recipeDetails: action.payload

            };

        case RECIPES_ORDER:

            return {
                ...state,
                recipesLoaded: GetRecipesOrder(action.payload, state.recipesFilter)
            };

        case GET_DIETS:

            return {
                ...state,
                diets: action.payload
            };

        case DIETS_ORDER:
        
            return {

                ...state,
                recipesLoaded: GetDietsOrder(action.payload, state.recipesFilter)

            };
            case LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }


}

export default rootReducer;