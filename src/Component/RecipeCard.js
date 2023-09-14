import React from 'react';

const RecipeCard = ({ title, image, id }) => {
  const navigateToRecipeDetails = () => {
    window.location.href = `/recipe/${id}`;
  };

  return (
    <div className="recipe-card" onClick={navigateToRecipeDetails}>
      <a href={`/recipe/${id}`}>
        <img src={image} alt={title} />
      </a>
      <div className="recipe-card-body">
        <h5 className="recipe-title">{title}</h5>
      </div>
    </div>
  );
};

export default RecipeCard;
