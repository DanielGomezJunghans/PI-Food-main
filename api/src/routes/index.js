const { Router } = require('express');
const router = Router();
const dietRouter = require('./dietRouter')
const recipeRouter = require('./recipeRouter')

router.use('/diets', dietRouter)
router.use('/recipes', recipeRouter)



module.exports = router;