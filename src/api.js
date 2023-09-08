// api.js
import axios from 'axios';

const API_KEY = '1eb2683e66424534ad3a3624227fd050';

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
