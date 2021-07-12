
const axios = require('axios');
const { Recipe, DietType } = require('../db');
const { RECIPIES_URL } = require('../const');
const { number } = require('../const')
const { API_KEY } = process.env;
const { Op } = require('sequelize');

const getAllRecipes = async (title) => {

    if (title) {

        const recipesAPI = await axios.get(`${RECIPIES_URL}number=${number}&query=${title}&apiKey=${API_KEY}`);

        let recipes = recipesAPI.data.results.map(//hago un mapeo para traerme unicamente las propiedades  que necesito 
            r => {
                const dietsName=r.diets.map(d => d = { name: d })
                return {
                   
                    id: r.id,
                    title: r.title,
                    image: r.image,
                    
                    DietTypes:  dietsName
                };
            })
        const recipesDB = await Recipe.findAll({ where: { title: { [Op.like]: `%${title}%` } },include: {
           
            model: DietType,
            attributes: ['name'],
         
        } });

        const recipesTotal = recipes.concat(recipesDB);
        

        return recipesTotal
    } else {


        let recipesAPI = await axios.get(`${RECIPIES_URL}number=${number}&apiKey=${API_KEY}`);

        let recipes = recipesAPI.data.results.map(//hago un mapeo para traerme unicamente las propiedades  que necesito 
            r => {
                const dietsName=r.diets.map(d => d = { name: d })
                return {
                   
                    id: r.id,
                    title: r.title,
                    image: r.image,
                    
                    DietTypes:  dietsName
                };
            })

        let recipesDB = await Recipe.findAll({
        

             include: {
           
                 model: DietType,
                 attributes: ['name'],
               
                
             }
         

        });

        let recipesTotal = recipes.concat(recipesDB);


        return recipesTotal

    }

};


module.exports = getAllRecipes;

