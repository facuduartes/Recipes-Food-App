import React from 'react';
import { FORMS } from '../../utils/constants';
import {Link} from 'react-router-dom';
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
            <img src={image}  />
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
                                {el.label}: {eval(el.name)} {/* eval:ejecuto a  codigo javascript representado como cadena */}
                               
                            </div>
                        ) : null
                    )}
                <div className='back'>
                    
                <Link to='/home'> {'< BACK'} </Link> 
                </div>
            </div>

        </div>

    );
}

export default Recipe;