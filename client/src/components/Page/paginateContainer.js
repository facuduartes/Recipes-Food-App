import React from 'react';
import { GROUP_RECIPES } from '../../utils/constants';
import { Styled } from './styled';



export const PaginateContainer=({recipes,page,setPage})=> {
    return (
        <Styled>
        <div className='paged'>


        <div>
    
            {recipes.length <= GROUP_RECIPES&& page>1 ?
            // segunda pasada recipes=9 y group=9 //recien activo prev
                <div className='button'  onClick={()=>setPage(page - 1)}>{` < Prev`}</div>
                : null}
    
            
        </div>
    
        <div>
    
            <div className="button" >{page}</div>
        </div>
        <div>
    
            {recipes.length >= GROUP_RECIPES  ?
            //ultima pasada recipes =1 y group=9 // no cumple
                <div className='button'  onClick={()=>setPage(page + 1)}>{` Next >`}</div>
                : null}
       
        </div>
    
    </div>
    </Styled>
    );
}

export default PaginateContainer;