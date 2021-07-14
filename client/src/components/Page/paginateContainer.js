import React from 'react';
import { GROUP_RECIPES } from '../../utils/constants';
import { Styled } from './styled';



export const PaginateContainer=({recipes,page,setPage})=> {
    return (
        <Styled>
        <div className='paged'>


        <div>
    
            {recipes.length <= GROUP_RECIPES&& page>1 ?
                <div className='button'  onClick={()=>setPage(page - 1)}>{` < Prev`}</div>
                : null}
    
            
        </div>
    
        <div>
    
            <div className="button" >{page}</div>
        </div>
        <div>
    
            {recipes.length >= GROUP_RECIPES ?
                <div className='button'  onClick={()=>setPage(page + 1)}>{` Next >`}</div>
                : null}
       
        </div>
    
    </div>
    </Styled>
    );
}

export default PaginateContainer;