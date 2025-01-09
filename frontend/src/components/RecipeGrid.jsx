import React, { useEffect, useState } from 'react';
import { getAllRecipes } from '../api/api';
import { Link } from 'react-router-dom';
import '../styles/RecipeGrid.css';

const RecipeGrid = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getAllRecipes();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2 className='header-2'>Recipe List</h2>
      <div className="grid-container">
        {recipes.map((recipe) => (
          <div className="grid-item" key={recipe._id}>
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p>Chef: {recipe.author}</p>
            <p>Avg Rating: {(recipe.ratingSum / recipe.ratingCount).toFixed(2)}</p>
            <Link to={`/recipe/${recipe._id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeGrid;
