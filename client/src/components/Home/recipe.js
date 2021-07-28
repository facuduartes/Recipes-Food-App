import React from 'react';
import Termino from '../../Assets/Termino.jpg'
import { NavLink } from 'react-router-dom';


export const Recipe = ({ id, image, title,likes, DietTypes }) => {


    return (

        <div className='card'>
<div className='link'>

            <NavLink to={`/recipes/${id}`} >

               
                {image ? <img src={image} className='img'  /> : <img src={Termino}className='img'  alt="not found" />}

            </NavLink>
</div>

           
<div className="content">
    
            <h3 className="text">🍽{title}</h3>


            <div className="text" >🍴{DietTypes.length ? "Diets :" + DietTypes.map(r => r.name) : "Diets: diets not available"}</div>

            <div className="text">💕{"Likes:"+likes}</div>
</div>
         
        </div>






    );
}

export default Recipe;