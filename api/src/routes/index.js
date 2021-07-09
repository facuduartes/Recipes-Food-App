const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const RecipesRoutes=require('./Recipes')
const DietsTypes= require('./Diets')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes',RecipesRoutes);
router.use('/types',DietsTypes);


module.exports = router;
