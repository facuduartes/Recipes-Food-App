import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiets } from '../../Actions/actions';
import Recipe from './recipe';
import { RECIPE_POST, RECIPE_URL } from '../../utils/constants';
import { Validate } from '../../Controllers/validate'
import swal from 'sweetalert';
import {Styled} from './styled'
import { Link } from 'react-router-dom';
const CreateRecipe = (props) => {



    const dispatch = useDispatch();
    const diet = useSelector(state => state.diets)


    const [errors, setErrors] = useState({})
    const [dietid, setDiet] = useState([]);
    const [Data, setData] = useState({
        title: '',
        summary: '',
        likes: 0,
        health: 0,
        readyIn: 0,
        instructions: '',
        diet: []
    })



    useEffect(() => {
        dispatch(getDiets())

    }, [dispatch])





    const handleChange = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value })

        let objError = Validate({ ...Data, [e.target.name]: e.target.value })

        setErrors(objError);
    }



    const handleDiets = (e) => {

        if (!dietid.includes(e.target.value)) {
            setDiet([...dietid, e.target.value]);

            setData({ ...Data, diet: [...Data.diet, e.target.value] })
        } else {
            var filtrado = dietid.filter(el => el !== e.target.value)
            setDiet(filtrado);
            setData({ ...Data, diet: filtrado })
        }

    }


    const handleSubmit = async (e) => {
        e.preventDefault();
       
        if (errors.hasOwnProperty("title") || errors.hasOwnProperty("summary") || errors.hasOwnProperty("likes") || errors.hasOwnProperty("health")) {
            swal({
                title: "Error",
                text: "Incorrect data, please try again!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })

        } else {

            await axios.post(RECIPE_URL, Data);
            swal({
                title: "Good job!",
                text: "Successfully added!",
                icon: "success",
                button: "Confirm",
            });
            setData({
                title: '',
                summary: '',
                likes: 0,
                health: 0,
                readyIn: 0,
                instructions: '',
                diet: []
            });
        }

    }
    return (
<Styled>

    
        <div className="create">
            <Recipe
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleDiets={handleDiets}
                Data={Data}
                diets={diet}
                errors={errors}

            />

        </div>

        <div className='back'>
                    
                    <Link to='/home' className="back"> {'< - BACK - <'} </Link> 
                    </div>
            

</Styled>
    );
}

export default CreateRecipe;