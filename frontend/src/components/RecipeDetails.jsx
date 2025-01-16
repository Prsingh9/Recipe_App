import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { getRecipeById, addRating } from '../api/api';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify
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
    
    // Convert the rating to a number
    const numericRating = Number(rating);
  
    // Ensure the rating is between 1 and 5
    if (numericRating < 1 || numericRating > 5) {
      toast.error('Rating must be between 1 and 5'); // Display error toast
      return;
    }
  
    try {
      // Pass the numericRating to the backend
      const data = await addRating(id, numericRating);
      setRecipe(data.recipe); // Update recipe with new rating info
      toast.success('Rating added successfully'); // Display success toast
      setRating(''); // Clear the rating input
    } catch (error) {
      toast.error('Error adding rating'); // Display error toast
    }
  };

  return (
    recipe && (
      <div className="recipe-container">
        <h2>{recipe.name}</h2>
        <div className='fdis'>
        <img src={recipe.image} alt={recipe.name} />
        <div>
        <p>Ingredients:</p>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        </div>
        </div>
        
        <p style={{fontSize:"24px",color:"black"}}>Instructions</p>
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

        <ToastContainer /> {/* Display toast notifications here */}
      </div>
    )
  );
};

export default RecipeDetails;
