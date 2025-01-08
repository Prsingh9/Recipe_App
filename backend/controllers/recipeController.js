const Recipe = require('../models/recipe');

// Controller to create a new recipe
const createRecipe = async (req, res) => {
  const { name, description, ingredients, instructions, author } = req.body;
  try {
    const newRecipe = new Recipe({
      name,
      description,
      ingredients,
      instructions,
      author,
    });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ error: 'Error creating recipe' });
  }
};

// Controller to get all recipes
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching recipes' });
  }
};

// Controller to get a single recipe by ID
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching recipe' });
  }
};

// Controller to add a rating to a recipe
const addRating = async (req, res) => {
  const { rating } = req.body;

  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    // Update ratings, ratingSum, and ratingCount
    recipe.ratings.push(rating);
    recipe.ratingSum += rating;
    recipe.ratingCount += 1;

    await recipe.save();

    // Calculate the average rating dynamically
    const averageRating = recipe.ratingSum / recipe.ratingCount;

    res.status(200).json({
      message: 'Rating added successfully',
      averageRating,
      recipe,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error adding rating' });
  }
};


module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  addRating,
};

