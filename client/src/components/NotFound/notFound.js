import React from 'react';
import { Link } from 'react-router-dom';

import { StyledDiv } from './styled';

const NotFound = ({ handleClick }) => {
    return (
       <StyledDiv>
            

            
           
         
                <div className='div_title'>
                    <h2 className='title'>Recipes not found !</h2>
                </div>
               
                <div value={'All'} onClick={handleClick} className='div_back'>
				{'< - BACK - <'}
			</div>
           
            </StyledDiv>
    );
};

export default NotFound;
