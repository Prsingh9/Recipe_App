import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { getRecipeById, addRating } from '../api/api';
import '../styles/RecipeDetails.css';  // Ensure this path is correct for your project structure

const RecipeDetails = () => {
  const { id } = useParams(); // Get the `id` parameter from the URL
  const [recipe, setRecipe] = useState(null);
  const [rating, setRating] = useState('');

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getRecipeById(id); // Use `id` directly
        setRecipe(data);  // Directly set the received data
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchRecipe();
  }, [id]);

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
      const data = await addRating(id, rating); // Use `id` directly
      setRecipe(data.recipe); // Update recipe with new rating info
      alert('Rating added successfully');
    } catch (error) {
      alert('Error adding rating');
    }
  };

  return (
    recipe && (
      <div className="recipe-container">
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} />
        <p>{recipe.description}</p>
        <p>{recipe.instructions}</p>
        <p className="chef">Chef: {recipe.author}</p>
        <p>Average Rating: {recipe.averageRating}</p> {/* Display the averageRating directly from the backend */}

        <form onSubmit={handleRatingSubmit} className="rating">
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
