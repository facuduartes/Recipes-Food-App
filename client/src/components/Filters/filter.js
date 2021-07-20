import React from 'react';

const Filter = ({ handleOrder, handleDiets,diets }) => {


    return (
        <div className="filters">
           
            <div>
           <div className="filterName" >Order</div>
            <select className="boton" onChange={(e) => handleOrder(e)}>
            
                <option value="All" >All</option>
                <option value="asc_name">Alphabetically (A-Z)</option>
                <option value="desc_name">Alphabetically (Z-A)</option>

            </select>
                
            </div>

<div>

            <div className="filterName" >Likes</div>
            

            <select className="boton" onChange={(e) => handleOrder(e)}>
                <option value="All" >All</option>
                <option value="better"> + Likes</option>
                <option value="worst"> - Likes</option>

            </select>
</div>

<div>

            <div className="filterName" >DietTypes</div>
            <select className="boton" onChange={(e) => handleDiets(e)}>
                <option value='all' >Diets</option>
                {diets &&
                    diets.map((t, i) => (
                        <option key={i} value={t.name} >
                            {t.name}
                        </option>
                    ))}
            </select> 
        </div>
</div>
    );
}

export default Filter;