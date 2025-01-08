import React, { useEffect, useState } from 'react';
import { getRecipeById, addRating } from '../api/api';

const RecipeDetails = ({ match }) => {
  const [recipe, setRecipe] = useState(null);
  const [rating, setRating] = useState('');

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getRecipeById(match.params.id);
        setRecipe(data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchRecipe();
  }, [match.params.id]);

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleRatingSubmit = async (e) => {
    e.preventDefault();
    if (rating < 1 || rating > 5) {
      alert('Rating must be between 1 and 5');
      return;
    }

    try {
      const data = await addRating(match.params.id, rating);
      setRecipe(data.recipe); // Update recipe with new rating info
      alert('Rating added successfully');
    } catch (error) {
      alert('Error adding rating');
    }
  };

  return (
    recipe && (
      <div>
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} />
        <p>{recipe.description}</p>
        <p>{recipe.instructions}</p>
        <p>Chef: {recipe.author}</p>
        <p>Average Rating: {(recipe.ratingSum / recipe.ratingCount).toFixed(2)}</p>

        <form onSubmit={handleRatingSubmit}>
          <input
            type="number"
            value={rating}
            onChange={handleRatingChange}
            min="1"
            max="5"
            required
            placeholder="Enter rating (1-5)"
          />
          <button type="submit">Submit Rating</button>
        </form>
      </div>
    )
  );
};

export default RecipeDetails;
