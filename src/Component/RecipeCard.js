import React from 'react';

const RecipeCard = ({ title, image, instructions }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{instructions}</p>
    </div>
  );
};

export default RecipeCard;
