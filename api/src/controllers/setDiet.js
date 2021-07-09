const { DietType } = require('../db');
const { dietTypes } = require('../const')


const setDiet = async () => {



    let diets = dietTypes.map(d => d = { name: d });
    //console.log(diets);
    let dietsnew = await DietType.bulkCreate(diets);


    return dietsnew
    
        
       

};

module.exports = setDiet;