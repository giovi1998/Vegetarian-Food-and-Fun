import React, { useEffect, useState } from 'react';
import { fetchRecipeList } from '../api'; // Import the function to fetch the list of recipes
import RecipeCard from './RecipeCard'; // Import the RecipeCard component

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await fetchRecipeList(); // Assuming you have a function to fetch the list of recipes
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    getRecipes();
  }, []);

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          image={recipe.image}
          id={recipe.id}
        />
      ))}
    </div>
  );
}

export default RecipeList;
