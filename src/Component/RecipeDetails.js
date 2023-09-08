import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeById } from './api'; // Implement this function to fetch recipe details

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const data = await fetchRecipeById(id); // Implement this function
      setRecipe(data);
    };

    getRecipeDetails();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.instructions}</p>
      {/* Display other recipe details here */}
    </div>
  );
};

export default RecipeDetails;
