import React, { useState } from 'react';
import { createRecipe } from '../api/api';

const AddRecipe = () => {
  const [recipeData, setRecipeData] = useState({
    name: '',
    description: '',
    ingredients: '',
    instructions: '',
    author: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRecipe(recipeData);
      alert('Recipe added successfully');
    } catch (error) {
      alert('Error adding recipe');
    }
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Recipe Name" value={recipeData.name} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={recipeData.description} onChange={handleChange} required />
        <input type="text" name="ingredients" placeholder="Ingredients (comma separated)" value={recipeData.ingredients} onChange={handleChange} required />
        <textarea name="instructions" placeholder="Instructions" value={recipeData.instructions} onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author" value={recipeData.author} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddRecipe;
