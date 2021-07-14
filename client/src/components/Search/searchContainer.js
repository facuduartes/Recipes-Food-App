import { useEffect ,useState} from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getRecipeName } from "../../Actions/actions";



export const Search = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");//estado local

   




    function handleChange(e) {
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
         if (name.length) {
           dispatch( getRecipeName(name))
           
        }
    }

    
    return (
       

            <div className='div_nav'>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <input

                        className='title'
                        type='text'
                        placeholder='Search country'
                        onChange={(e) => handleChange(e)}
                    />


                </form>
                <button type='submit'> Search</button>
            </div>


        



    );

    
}


// function mapDispatchToProps(dispatch) {
//     return {
//         getRecipeName: name => dispatch(getRecipeName(name))
//     };
// }

export default  (Search);