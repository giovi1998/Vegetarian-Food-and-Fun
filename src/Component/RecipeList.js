// RecipeList.js
import React, { useEffect, useState } from 'react';
import { fetchRecipes, fetchRecipeById } from '../api';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes();

      // Fetch additional details for each recipe and replace the summary
      const recipesWithDetails = await Promise.all(
        data.map(async (recipe) => {
          const details = await fetchRecipeById(recipe.id);
          return details;
        })
      );

      setRecipes(recipesWithDetails);
    };

    getRecipes();
  }, []);

  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          title={recipe.title}
          image={recipe.image}
          ingredients={recipe.extendedIngredients}
          id={recipe.id}
        />
      ))}
    </div>
  );
};

export default RecipeList;
