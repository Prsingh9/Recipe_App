import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/recipes';

export const getAllRecipes = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const createRecipe = async (recipeData) => {
  try {
    const response = await axios.post(apiUrl, recipeData);
    return response.data;
  } catch (error) {
    console.error('Error creating recipe:', error);
    throw error;
  }
};

export const getRecipeById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};

export const addRating = async (id, rating) => {
  try {
    const response = await axios.post(`${apiUrl}/${id}/rating`, { rating });
    return response.data;
  } catch (error) {
    console.error('Error adding rating:', error);
    throw error;
  }
};
