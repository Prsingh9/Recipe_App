import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Import Home component
import AddRecipe from './components/AddRecipe';
import RecipeGrid from './components/RecipeGrid';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Add Home as the default route */}
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/view-recipes" element={<RecipeGrid />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
