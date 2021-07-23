const { Router } = require('express');
const router = Router();
const { RECIPIES_URL } = require('../const');
const axios = require('axios');

const { Recipe, DietType } = require('../db');

const getAllRecipes = require('../controllers/getAllRecipes');
const getRecipeID = require('../controllers/getRecipeID')


router.get('/', async (req, res) => {

  const { name } = req.query;



  let recipesFinish = await getAllRecipes();
  if (name) {
    const listName = recipesFinish.filter(e => e.title.toUpperCase().includes(name.toUpperCase()));

    const list9 = listName.slice(0, 9);
    
    if (list9.length>0) {
     return res.status(200).send(list9)
    } else { return res.status(400).send('Recipe not found') }
  }
  recipesFinish.length
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
    return res.status(404).send('Error: Necessary parameters are required');


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