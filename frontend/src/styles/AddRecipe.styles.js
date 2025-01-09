import styled from 'styled-components';

// Main container with a food-themed background gradient
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg,rgb(255, 0, 0),rgb(209, 141, 206));
  padding: 30px;
 font-family: 'Roboto', sans-serif;
`;

// Card with a modern hover shadow effect and subtle rounded corners
const Card = styled.div`
  background: #fff8e1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 40px;
  width: 100%;
  max-width: 550px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

// Title with warm and inviting colors
const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #ff5722;
  text-align: center;
  margin-bottom: 25px;
  text-transform: uppercase;
`;

// Form with optimized spacing for inputs
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Input with a subtle border and vibrant focus effect
const Input = styled.input`
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ffcc80;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #ff7043;
    box-shadow: 0 0 5px rgba(255, 112, 67, 0.5);
  }
`;

// Textarea styled similarly to Input, with resizable functionality
const Textarea = styled.textarea`
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ffcc80;
  border-radius: 8px;
  outline: none;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #ff7043;
    box-shadow: 0 0 5px rgba(255, 112, 67, 0.5);
  }
`;

// Button with a gradient background and hover animation
const Button = styled.button`
  background: linear-gradient(90deg, #ff7043, #ff5722);
  color: #ffffff;
  font-size: 17px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(90deg, #ff5722, #e64a19);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

// Export styles for use in the AddRecipe component
export { Container, Card, Title, Form, Input, Textarea, Button };
