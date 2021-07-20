import React from 'react';
import { Link } from 'react-router-dom';
import { Style } from './styled'
import dish from '../../Assets/dishLogo.png'
export const landingPage = () => {

    return (
        <Style>

            <div className='landing'>

                <h1> FOOD APP</h1>

                <div className="slogan" >Become a virtual chef, adding your favorite recipes!  </div>
             
                    <img src={dish} width="60" height="60" />
              

                <Link to='/home'>

                    <button className='btnp' type='submit'>
                        Let's Start</button>
                </Link>
            </div>
        </Style>

    );
}

export default landingPage;