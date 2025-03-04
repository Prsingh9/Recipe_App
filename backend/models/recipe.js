const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: [String],
  instructions: String,
  author: String,
  ratings: [Number], // Keep this if you want to store individual ratings
  ratingSum: { type: Number, default: 0 }, // Sum of all ratings
  ratingCount: { type: Number, default: 0 }, // Number of ratings
  averageRating: { type: Number, default: 0 }, // Average rating directly saved
  image: { type: String, required: false }, // Field for image URL
});


const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
