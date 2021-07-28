import React from 'react';
import { FORMS } from '../../utils/constants';
import {Link} from 'react-router-dom';
import Termino from '../../Assets/Termino.jpg'
export const Recipe = ({id,
    image,
    title,
    DietTypes,
    summary,
    readyIn,
    likes,
    health
    , instructions}) => {
    return (
        <div>
            <div className="image">
         {image ? <img src={image} className='img'  /> : <img src={Termino}className='img'  alt="not found" />}

            </div>
           
         <p className="diets">DIETS</p>
            <div className='div_type_container'>
                
                {DietTypes &&
                    DietTypes.map((el, i) => (
                        <div key={i} className='div_types'>
                            <p key={el.name} className='p'>
                                {el.name}
                            </p>
                        </div>
                    ))}
            </div>
            <div className='div_title'>
                <h1>{title}</h1>
            </div>
            <div className='div_details'>
                {FORMS &&
                    FORMS.map((el, i) =>
                        i > 0 ? (
                            <div key={el.name} className='text'>
                           <div className="label">     {el.label}: </div> <div className="res"> {eval(el.name)}</div> {/* eval:ejecuto a  codigo javascript representado como cadena */}
                              {/* mapeo forms 
                                 0: Title :  el.name(title) :(va a tomar las props que me llegan por parametros)          
                              
                              */}
                            </div>
                        ) : null
                    )}
                
            </div>

        </div>

    );
}

export default Recipe;