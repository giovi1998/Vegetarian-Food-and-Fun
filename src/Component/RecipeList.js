import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from Spoonacular API using your API key
    const apiKey = 'YOUR_SPOONACULAR_API_KEY';
    fetch(
      `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
      });
  }, []);

  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          title={recipe.title}
          image={recipe.image}
          instructions={recipe.instructions}
        />
      ))}
    </div>
  );
};

export default RecipeList;
