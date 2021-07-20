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
            return false
        }
    } else {
      

        try {
            const recipe = await axios.get(`${RECIPIES_ID}${id}/information?apiKey=${API_KEY}`);

            const r = recipe.data;
       
            const dietsName=r.diets.map(d => d = { name: d });
const dish= r.dishTypes.map(d => d = { name: d });
//  const analyzed= r.analyzedInstructions[0].steps.map((e,i )=>"- " + (++i) +": "+ e.step+" ");
// r.analyzedInstructions[0].steps.map((s) => { return { step: s.number + ": " + s.step } })

            const recipeId = {
                id: r.id,
                title: r.title,
                image: r.image,
                summary: r.summary,
                likes:r.aggregateLikes,
                health: r.healthScore,
                readyIn: r.readyInMinutes + " min",
                 instructions: r.instructions,
            //    instructions:analyzed,
               //dishtypes:dish,
                DietTypes: dietsName                  //array           
            };
            return recipeId;

        }

        catch (e) {
            return false;
        };
    }
   









}


module.exports = getRecipeID;

 // let recipeTotal = await getAllRecipes();

    // switch (situation) {

    //     case 'number':

    //         return recipeTotal.filter((el) => el.id.toString() === element);
    //     case 'string':



    //       return recipeTotal.filter(re=>re.title.toLowerCase().includes(element));



    //     default:
    //         return recipeTotal;