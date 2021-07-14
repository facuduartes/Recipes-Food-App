import React from 'react';

import { NavLink } from 'react-router-dom';


export const  Recipe=({id,image,title,DietTypes})=> {


    return (
      
           <div>
      
        <NavLink to={`/recipes/${id}`} className='link'>
        
        <img src={image} className='img' />
       
       
         </NavLink>
          <h3>{title}</h3>
         

          <div >{DietTypes.length?"Diets :"+ DietTypes.map(r=>r.name):"Diets: diets not available"}</div>


          </div>
      



     
        
    );
}

export default Recipe;