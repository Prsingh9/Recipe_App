const express = require('express');
const recipeRoute = require('./routes/recipe'); // Use require instead of import
const {mongooseConnect} = require('./config');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();



const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());
mongooseConnect();

// Routes
app.use('/api/recipes', recipeRoute); // Mount the recipe route

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Recipe API');
});

// Error handling middleware (optional but useful for catching errors)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
