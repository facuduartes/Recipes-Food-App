import React from 'react';
import Termino from '../../Assets/Termino.jpg'
import { NavLink } from 'react-router-dom';


export const Recipe = ({ id, image, title,likes, DietTypes }) => {


    return (

        <div>

            <NavLink to={`/recipes/${id}`} className='link'>

               
                {image ? <img src={image} className='img'  /> : <img src={Termino}className='img'  alt="not found" />}

            </NavLink>
            <h3>🍽{title}</h3>


            <div >{DietTypes.length ? "Diets :" + DietTypes.map(r => r.name) : "Diets: diets not available"}</div>

            <div>💕{"Likes:"+likes}</div>
        </div>






    );
}

export default Recipe;