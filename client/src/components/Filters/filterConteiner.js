import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from './filter';
import { clearRecipeDetail, orderRecipes ,orderDiets, getDiets} from '../../Actions/actions';
import { Styled } from './styled';


export const FilterConteiner = (props) => {

    console.log("FILTRO", props)
    const dispatch = useDispatch();
    const diets= useSelector(state=>state.diets)
    // const allRecipes = useSelector(state=>state.recipesLoaded); 

    useEffect(() => {
        dispatch(getDiets());
    }, [dispatch]);
    const handleOrder = (e) => {


        dispatch(orderRecipes(e.target.value));

    };

    const handleDiets = (e) => {


        dispatch(orderDiets(e.target.value));

    };


    return (
       
            <Styled>

           
            <Filter
                handleOrder={handleOrder}

                handleDiets={handleDiets}

                diets={diets}
            />

</Styled>
       
    );
}

export default FilterConteiner;