// api.js
import axios from 'axios';

const API_KEY = 'YOUR_SPOONACULAR_API_KEY';

// Function to fetch recipe details by ID
export const fetchRecipeById = async (recipeId) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    return null; // Return null or handle the error as needed
  }
};
