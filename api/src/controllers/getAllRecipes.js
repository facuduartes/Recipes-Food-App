
const axios = require('axios');
const { Recipe, DietType } = require('../db');
const { RECIPIES_URL } = require('../const');
const { number } = require('../const')
const { API_KEY } = process.env;
const { Op } = require('sequelize');

const getAllRecipes = async (title) => {



        let recipesAPI = await axios.get(`${RECIPIES_URL}number=${number}&apiKey=${API_KEY}`);

        let recipes = recipesAPI.data.results.map(//hago un mapeo para traerme unicamente las propiedades  que necesito 
            r => {
                const dietsName=r.diets.map(d => d = { name: d });
                
                
                return {
                   
                    id: r.id,
                    title: r.title,
                    image: r.image,
                    likes:r.aggregateLikes,
                     //score:r.spoonacularScore,
                    DietTypes:  dietsName
                };
            })

        let recipesDB = await Recipe.findAll({
        

             include: {
           
                 model: DietType,
                 attributes: ['name'],
               
                
             }
         

        });


      var recipesTotal= [...recipesDB, ...recipes]
        
      
      return recipesTotal

    

};


module.exports = getAllRecipes;

