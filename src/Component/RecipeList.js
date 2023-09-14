import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import Loading from './Loading';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.spoonacular.com/recipes/complexSearch?apiKey=YOUR_API_KEY&number=10&diet=vegan'
        );
        setRecipes(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const navigateToRecipeDetails = (id) => {
    window.location.href = `/recipe/${id}`;
  };

  return (
    <div className="recipe-list">
      {isLoading ? (
        <Loading />
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="recipe-card"
            onClick={() => navigateToRecipeDetails(recipe.id)}
          >
            <img src={recipe.image} alt={recipe.title} />
            <div className="recipe-card-body">
              <h5 className="recipe-title">{recipe.title}</h5>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default RecipeList;
