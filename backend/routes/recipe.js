const express = require('express');
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  addRating,
} = require('../controllers/recipeController');

const router = express.Router();

// Route to create a recipe
router.post('/', createRecipe);

// Route to get all recipes
router.get('/', getAllRecipes);

// Route to get a recipe by ID
router.get('/:id', getRecipeById);

// Route to add a rating to a recipe
router.post('/:id/rating', addRating);

module.exports = router;