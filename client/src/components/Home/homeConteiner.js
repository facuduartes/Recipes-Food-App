import React, { useEffect, useReducer, useState } from 'react';
import { getDiets, getRecipes } from '../../Actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { GROUP_RECIPES } from '../../utils/constants';
import recipe, { Recipe } from './recipe'
import PaginateContainer from '../Page/paginateContainer';
import { Styled } from './styled';
import { FilterConteiner } from '../Filters/filterConteiner';
import NotFound from '../NotFound/notFound';
import Loader from '../Loader/loader';

export const Home = () => {

    const [page, setPage] = useState(1);

    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);
    const recipesLoaded = useSelector(state => state.recipesLoaded);



    useEffect(() => {
        dispatch(getRecipes());

    }, []);

    const handleClick = (e) => {
        dispatch(getRecipes());
    };



    const finalCount = page * GROUP_RECIPES;

    const initialCount = finalCount - GROUP_RECIPES;


    const recipes = recipesLoaded.slice(initialCount, finalCount);






    return (
      

            <Styled >



                <FilterConteiner className='filter' />

                {loading ? <Loader /> : (
                  <div> 
                    <div className='recipesList'>

                        {recipes.length ? recipes.map(r =>

                            <Recipe
                                id={r.id}

                                image={r.image}
                                title={r.title}
                                likes={r.likes}
                                DietTypes={r.DietTypes}
                            />
                        ) : (

                            <NotFound handleClick={handleClick} /> //igualar con el deffault "All" de las opciones de dietas //
                        )}
                       

                    </div>
                    <PaginateContainer
 recipes={recipes}
 page={page}
 setPage={setPage}
/>
</div>

                )}






            </Styled>

        
    );
}

export default (Home);