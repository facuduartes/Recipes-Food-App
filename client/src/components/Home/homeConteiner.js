import React, { useEffect, useReducer, useState } from 'react';
import { getRecipes } from '../../Actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { GROUP_RECIPES } from '../../utils/constants';
import recipe, { Recipe } from './recipe'
import PaginateContainer from '../Page/paginateContainer';
import { Styled } from './styled';

export const Home = () => {

    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    const recipesLoaded = useSelector(state => state.recipesLoaded);



    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch]);



    const finalCount = page * GROUP_RECIPES;

    const initialCount = finalCount - GROUP_RECIPES;


    const recipes = recipesLoaded.slice(initialCount, finalCount);






    return (

        <Styled >

<div className='recipesList'>

            {recipes && recipes.map(r =>

                <Recipe
                    id={r.id}
                    image={r.image}
                    title={r.title}
                    DietTypes={r.DietTypes}
                />





            )}
</div>

            <PaginateContainer
            recipes={recipes}
            page={page}
            setPage={setPage}
            />

        </Styled>
    );
}

export default (Home);