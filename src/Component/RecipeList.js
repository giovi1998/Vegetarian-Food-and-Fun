import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { fetchRecipeById } from '../api';
import Loading from './Loading';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await fetchRecipeById();
        setRecipes(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

  return (
    <div className="recipe-list">
      {loading ? (
        <Loading />
      ) : recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <article className="meal" key={index}>
            <div className="featured-meals-center">
              <div className="img-container">
                {/* Use Link to navigate to the recipe details page */}
                <Link to={`/recipe/${recipe.id}`}>
                  <img src={recipe.image} alt="Meal" />
                  <p className="meal-info">{recipe.title}</p>
                </Link>
              </div>
            </div>
          </article>
        ))
      ) : (
        <p>No recipes available.</p>
      )}
    </div>
  );
}

export default RecipeList;
