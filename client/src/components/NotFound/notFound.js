import React from 'react';
import { Link } from 'react-router-dom';

import { StyledDiv } from './styled';

const NotFound = ({ handleClick }) => {
    return (
        <>
            

            <div value={'All'} onClick={handleClick} className='div_back'>
				{'< BACK'}
			</div>
           
         
                <div className='div_title'>
                    <h2 className='title'>Recipes not found</h2>
                </div>
                {/* <div className='div_img'>
					<img className='img' src={img} alt='404' />
				</div> */}
           
        </>
    );
};

export default NotFound;
