const { RECIPIES_ID } = require('../const');
const axios = require('axios');
const { Recipe, DietType } = require('../db');
const { API_KEY } = process.env;
const getAllRecipes = require('./getAllRecipes');
const { Op } = require('sequelize');

const getRecipeID = async (id) => {
    if (id.includes('-')) {
        try {

            const findID = await Recipe.findOne({

                where: { id },
                include: {

                    model: DietType,
                     attributes: ['name'],
                   
                   
                }
    
                
            })
            return findID

        } catch (e) {
            return 'Recipe not found'
        }
    } else {


        try {
            const recipe = await axios.get(`${RECIPIES_ID}${id}/information?apiKey=${API_KEY}`);

            const r = recipe.data;

            const recipeId = {
                id: r.id,
                title: r.title,
                image: r.image,
                summary: r.summary,
                likes: r.aggregateLikes,
                health: r.healthScore,
                readyIn: r.readyInMinutes + " min",
                //instructions: r.instructions,
                instructions: r.analyzedInstructions[0].steps.map((s) => { return { step: s.number + ": " + s.step } }),
                DietTypes: r.diets                   //array           
            };
            return recipeId;

        }

        catch (e) {
            return false;
        };
    }
    // let recipeTotal = await getAllRecipes();

    // switch (situation) {

    //     case 'number':

    //         return recipeTotal.filter((el) => el.id.toString() === element);
    //     case 'string':



    //       return recipeTotal.filter(re=>re.title.toLowerCase().includes(element));



    //     default:
    //         return recipeTotal;









}


module.exports = getRecipeID;