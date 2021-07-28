import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getRecipeName, getRecipes } from "../../Actions/actions";
import Loader from "../Loader/loader";
import dish from '../../Assets/dish.png'


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

            dispatch(getRecipeName(name));
         setName("")
        } else {
            dispatch(getRecipes());
           setName("")
        }
    }

    return (

     

            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='search-box'>
                    <input

                        className='title'
                        type='text'
                        placeholder='Search recipe'
                        value={name}
                        onChange={(e) => handleChange(e)}
                    />
                    
<button type='submit' className='btn'>

                  <img   className="btn" src={dish} width="40" height="35" />
</button>
                    
                </div>

               

            </form>

            
       






    );


}



export default (Search);