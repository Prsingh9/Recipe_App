import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import AddRecipe from './components/AddRecipe';
import RecipeGrid from './components/RecipeGrid';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe App</h1>
        <div>
          <button onClick={() => window.location.href = '/add-recipe'}>Add Recipe</button>
          <button onClick={() => window.location.href = '/view-recipes'}>View Recipes</button>
        </div>
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/add-recipe" element={<AddRecipe />} /> {/* Use element instead of component */}
          <Route path="/view-recipes" element={<RecipeGrid />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
