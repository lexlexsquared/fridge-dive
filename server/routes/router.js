const express = require('express');

const fridgeController = require('../controllers/fridgeControllers');
const diveController = require('../controllers/diveController');
// const userController = require('../controllers/userControllers'); //stretch
const router = express.Router();

router.get('/recipes', diveController.getRecipes,(req, res) => 
  res.status(200).json(res.locals.recipes)
)

// router.get('recipeDetail', diveController.getRecipes, diveController.viewRecipe, (req, res) => 
//   res.status(200).json(res.locals.detail)
// )

// router.get('/diveIn', diveController.getRecipes, diveController.diveIn, fridgeController.display, (req, res) =>
//   res.status(200).json(res.locals.dive, res.locals.fridgeDisplay)
// )

  module.exports = router;