import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import RecipeCard from './RecipeCard';
import Loading from './Loading.js';

function RecipeList() {
  const [recipes, setRecipes] = useState({
    arrayRecipes: [],
    offset: 0,
    number: 0,
    totalResults: 0,
    isLoading: true,
  });

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.get(
          'https://api.spoonacular.com/recipes/complexSearch?apiKey=1eb2683e66424534ad3a3624227fd050&number=3&diet=vegan'
        );

        const { results, offset, number, totalResults } = response.data;

        setRecipes({
          arrayRecipes: results,
          offset,
          number,
          totalResults,
          isLoading: false,
        });
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setRecipes((prevRecipes) => ({
          ...prevRecipes,
          isLoading: false,
        }));
      }
    };

    dataFetch();
  }, []);

  return (
    <div className="recipe-list">
      {recipes.isLoading ? (
        <div>Loading...</div>
      ) : recipes.arrayRecipes.length > 0 ? (
        recipes.arrayRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            id={recipe.id}
          />
        ))
      ) : (
        <p>No recipes available.</p>
      )}
    </div>
  );
}

export default RecipeList;
