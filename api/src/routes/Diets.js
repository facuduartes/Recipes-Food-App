const { Router } = require('express');
const router = Router();
const { DietType } = require('../db');
const dietTypes = require('../const')
const setDiet = require('../controllers/setDiet')

router.get('/', async (req, res) => {
  //  let diets = dietTypes.map(d => d = { name: d });

  let totalTypes = await DietType.findAll();
  let dietArr = await setDiet();

  totalTypes.length ? res.status(200).send(totalTypes)

    : res.status(200).send(dietArr)

})

module.exports = router;

