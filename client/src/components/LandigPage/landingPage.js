import React from 'react';
import { Link } from 'react-router-dom';
import { Style } from './styled'

export const landingPage = () => {

    return (
        <Style>

            <div className='landing'>
                <h1>FOOD</h1>
                <div> <p>ESLOGAN  </p> </div>

            <Link to='/home'>
                <img src="https://image.flaticon.com/icons/png/512/1946/1946770.png" alt="logo" width="60" height="60" margin-right="auto" cursor="pointer" />
                <button className='btnp' type='submit'>
                    Let's Start</button>
            </Link>
            </div>
        </Style>

    );
}

export default landingPage;