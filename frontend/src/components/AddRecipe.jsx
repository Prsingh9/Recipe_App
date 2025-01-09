import React, { useState } from 'react';
import { createRecipe } from '../api/api';
import { Container, Card, Title, Form, Input, Textarea, Button } from '../styles/AddRecipe.styles.js'; // Adjust the path as necessary

const AddRecipe = () => {
  const [recipeData, setRecipeData] = useState({
    name: '',
    description: '',
    ingredients: '',
    instructions: '',
    author: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRecipe(recipeData);
      alert('Recipe added successfully');
    } catch (error) {
      alert('Error adding recipe');
    }
  };

  return (
    <Container>
      <Card>
        <Title>Add Recipe</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Recipe Name"
            value={recipeData.name}
            onChange={handleChange}
            required
          />
          <Textarea
            name="description"
            placeholder="Description"
            value={recipeData.description}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="ingredients"
            placeholder="Ingredients"
            value={recipeData.ingredients}
            onChange={handleChange}
            required
          />
          <Textarea
            name="instructions"
            placeholder="Instructions"
            value={recipeData.instructions}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="author"
            placeholder="Author"
            value={recipeData.author}
            onChange={handleChange}
            required
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AddRecipe;
