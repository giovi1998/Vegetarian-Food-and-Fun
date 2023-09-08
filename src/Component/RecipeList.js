// RecipeList.js
import React, { useEffect, useState } from 'react';
import { fetchRecipes, fetchRecipeById } from '../api'; // Import your API functions
import Loading from './Loading'; // You may need to create this component
import '../styles/RecipeList.css'; // Add your styles

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };

    getRecipes();
  }, []);

  return (
    <div className="recipe-list">
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <article className="meal" key={index}>
            <div className="featured-meals-center">
              <div className="img-container">
                <img src={recipe.image} alt="Meal" />
                {/* You can add a link to the recipe details page here */}
                <p className="meal-info">{recipe.title}</p>
              </div>
            </div>
          </article>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default RecipeList;
