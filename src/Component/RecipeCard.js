import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ title, image, id }) => {
  return (
    <Link to={`/recipe/${id}`} className="recipe-card-link">
      <div className="recipe-card">
        <img src={image} alt={title} />
        <div className="recipe-card-body">
          <h5 className="recipe-title">{title}</h5>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
