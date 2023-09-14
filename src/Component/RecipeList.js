import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import Loading from './Loading';
import { Link } from 'react-router-dom';

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

  return (
    <div className="recipe-list">
      {isLoading ? (
        <Loading />
      ) : (
        recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <RecipeCard
              title={recipe.title}
              image={recipe.image}
              id={recipe.id}
            />
          </Link>
        ))
      )}
    </div>
  );
}

export default RecipeList;
