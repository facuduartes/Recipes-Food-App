import React from 'react';
import {Styled} from './styled';
import {BeatLoader} from "react-spinners";

const Loader = () => {
    return (
        <Styled>
 <div className='loading'>
            <BeatLoader size={25}/>
        </div>
        </Styled>
       
    );
};

export default Loader;