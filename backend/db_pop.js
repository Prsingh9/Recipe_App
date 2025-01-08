// npm i axios mongoose dotenv
const axios = require('axios');
const mongoose = require('mongoose');
const Recipe = require('./models/recipe'); // Assuming the model is in models/recipe.js
const dotenv = require('dotenv');

dotenv.config();

// Define the list of meal IDs
const mealData = [
  { "strMeal": "Baingan Bharta", "strMealThumb": "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg", "idMeal": "52807" },
  { "strMeal": "Bread omelette", "strMealThumb": "https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg", "idMeal": "53076" },
  { "strMeal": "Chicken Handi", "strMealThumb": "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg", "idMeal": "52795" },
  { "strMeal": "Dal fry", "strMealThumb": "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg", "idMeal": "52785" },
  { "strMeal": "Lamb Biryani", "strMealThumb": "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg", "idMeal": "52805" },
  { "strMeal": "Lamb Rogan josh", "strMealThumb": "https://www.themealdb.com/images/media/meals/vvstvq1487342592.jpg", "idMeal": "52808" },
  { "strMeal": "Matar Paneer", "strMealThumb": "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg", "idMeal": "52865" },
  { "strMeal": "Tandoori chicken", "strMealThumb": "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg", "idMeal": "52806" },
  { "strMeal": "Chicken Alfredo Primavera", "strMealThumb": "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg", "idMeal": "52796" },
  { "strMeal": "Lasagne", "strMealThumb": "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg", "idMeal": "52844" },
  { "strMeal": "Mediterranean Pasta Salad", "strMealThumb": "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg", "idMeal": "52777" },
  { "strMeal": "Honey Teriyaki Salmon", "strMealThumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg", "idMeal": "52773" },
  { "strMeal": "Japanese gohan rice", "strMealThumb": "https://www.themealdb.com/images/media/meals/kw92t41604181871.jpg", "idMeal": "53033" },
  { "strMeal": "Japanese Katsudon", "strMealThumb": "https://www.themealdb.com/images/media/meals/d8f6qx1604182128.jpg", "idMeal": "53034" },
  { "strMeal": "Katsu Chicken curry", "strMealThumb": "https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg", "idMeal": "52820" },
  { "strMeal": "Sushi", "strMealThumb": "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg", "idMeal": "53065" }
];

// List of authors
const authors = ['Parakram', 'Prabhakar', 'Pratheek', 'Bhargavan', 'Sahil', 'Sedhu', 'Kirthik', 'Samim'];

// Connect to MongoDB
mongoose.connect(`${process.env.MONGO_URI}`)
  .then(() => console.log('MongoDB connected!'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Function to get meal data from TheMealDB API
const fetchMealData = async (idMeal) => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    return response.data.meals[0];
  } catch (error) {
    console.error(`Error fetching data for meal ID ${idMeal}:`, error);
    return null;
  }
};

// Function to save recipe to MongoDB
const saveRecipe = async (meal) => {
  const randomAuthor = authors[Math.floor(Math.random() * authors.length)];

  const newRecipe = new Recipe({
    name: meal.strMeal,
    description: meal.strInstructions,
    ingredients: [
      meal.strIngredient1, meal.strIngredient2, meal.strIngredient3, meal.strIngredient4,
      meal.strIngredient5, meal.strIngredient6, meal.strIngredient7, meal.strIngredient8,
      meal.strIngredient9, meal.strIngredient10
    ].filter(ingredient => ingredient), // Remove empty ingredients
    instructions: meal.strInstructions,
    author: randomAuthor,
    image: meal.strMealThumb, // Image URL from the API
  });

  try {
    await newRecipe.save();
    console.log(`${meal.strMeal} added to the database!`);
  } catch (error) {
    console.error(`Error saving recipe ${meal.strMeal}:`, error);
  }
};

// Main function to loop through the meals and fetch data
const main = async () => {
  for (const meal of mealData) {
    const mealDetails = await fetchMealData(meal.idMeal);
    if (mealDetails) {
      await saveRecipe(mealDetails);
    }
  }
  mongoose.connection.close(); // Close the database connection when done
};

// Run the script
main();
