import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Swad Swayambar</h1>
      <div className="home-links">
        <Link to="/add-recipe" className="home-link">
          Add Recipe
        </Link>
        <Link to="/view-recipes" className="home-link">
          View Recipes
        </Link>
      </div>
    </div>
  );
};

export default Home;
