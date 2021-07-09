const { Router } = require('express');
const router = Router();
const { RECIPIES_URL } = require('../const');
const axios = require('axios');

const { Recipe, DietType } = require('../db');

const getAllRecipes = require('../controllers/getAllRecipes');
const getRecipeID = require('../controllers/getRecipeID')
const setDiet = require('../controllers/setDiet');

router.get('/', async (req, res) => {

  const { title } = req.query;



  let recipesFinish = await getAllRecipes(title);

  recipesFinish
    ? res.status(200).send(recipesFinish)
    : res.status(404).send('Recipe not found');
    
  });





router.get('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    let recipeId = await getRecipeID(id);
    recipeId
      ? res.status(200).send(recipeId)
      : res.status(404).send('Recipe not found');
  }
});




router.post('/', async (req, res) => {
  const { title, summary, likes, health, instructions, readyIn, diet } = req.body;

  if (!title || !summary)
    return res.status(400).send('Error: Necessary parameters are required');


  const createRecipe = await Recipe.create({
    title,
    summary,
    likes,
    health,
    instructions,
    readyIn,
   
   
  });
// await diet.forEach(async(d)=>await setDiet(d));
  await createRecipe.setDietTypes(diet);
  
  return res.status(200).send(createRecipe);

});






module.exports = router;