import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getRecipeName,getRecipes } from "../../Actions/actions";
import Loader from "../Loader/loader";



export const Search = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");//estado local

    const loading = useSelector(state => state.loading);




    function handleChange(e) {
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (name.length) {
          
            dispatch(getRecipeName(name))

        }else {
            dispatch(getRecipes())
        }
    }


    return (
      

        <div className='div_nav'>
  
            <form onSubmit={(e) => handleSubmit(e)}>
        
                <input

                    className='title'
                    type='text'
                    placeholder='Search recipe'
                    onChange={(e) => handleChange(e)}
                />
                <button type='submit'> Search</button>

            </form>
    
        </div>






    );


}



export default (Search);