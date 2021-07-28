import React from 'react';
import dish from '../../Assets/dishLogo.png'
const  Recipe=({handleSubmit,handleChange,handleDiets,diets,Data,errors})=> {
    return (
        <>
        <div className="logo">

            <h1>CREATE YOUR RECIPE</h1>  <img src={dish} width="48" height="45" />
        </div>
        <form classname='form' onSubmit={(e)=>handleSubmit(e)}  >

            <label>Recipe Name</label>
            <input classname="title" name="title"  value={Data.title} type='text' placeholder="Recipe name" onChange={(e) => handleChange(e)} />
            {errors.title && (
                <p className="error" >{errors.title}</p>
            )}
            <label>Summary</label>
            <input classname="summary" name="summary"  value={Data.summary} type='text' placeholder="summary..." onChange={(e) => handleChange(e)} />
            {errors.summary && (
                <p  className="error" >{errors.summary}</p>
            )}
            <label>Score</label>
            <input classname="likes" name="likes" value={Data.likes}  placeholder="123..." onChange={(e) => handleChange(e)} />
            {errors.likes&& (
                <p className="error"  >{errors.likes}</p>
            )}
            <label>Health Score</label>
            <input classname="healthScore" name="health" value={Data.health}   placeholder="123..." onChange={(e) => handleChange(e)} />
            {errors.health && (
                <p className="error">{errors.health}</p>
            )}
            <label>Ready In (min)</label>
            <input classname="score" name="readyIn" value={Data.readyIn}  placeholder="123...min" onChange={(e) => handleChange(e)} />
           
            <label >Instructions</label>
            <textarea type="text" name="instructions" value={Data. instructions}  placeholder="Recipe step by step..." onChange={(e) => handleChange(e)} />
        
        <label >Choose diet/s:</label>
             

<div className="diets">
{diets && diets.map((d, i) => <span >
                        <label >
                            {d.name}
                            </label>
                       
                            <input type="checkbox"
                       
                        name='diet'
                        value={d.id}
                        key={i}
                        onChange={handleDiets} />
                    </span>)}

                    {errors.diet && (
                <p className="error" >{errors.diet}</p>
            )}
</div>
        
        
                <div className='div_submit'>
						<button className='btn_submit' type='submit'>
							Create a Recipe
						</button>
					</div>

        </form>
       </>

    );
}

export default Recipe;