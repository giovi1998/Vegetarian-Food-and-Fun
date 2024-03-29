import React from 'react';
import Hero from '../Component/Hero';
import Banner from '../Component/Banner';
import { Link } from 'react-router-dom';
import TopMeals from '../Component/TopMeals';
import MealList from '../Component/MealList';
import RecipeList from '../Component/RecipeList';
import RecipeDetails from '../Component/RecipeDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Hero>
        <Banner
          title="The Vegan Kitchen: Nourishing Your Body and Soul with Plant-Based Recipes"
          subtile="Discover the Joy of Cooking Compassionate, Wholesome Meals for a Healthier You and a Better Planet"
        >
          <Link to="/rooms" className="btn-primary">
            Go to our recipes
          </Link>
        </Banner>
      </Hero>
      <Routes>
        <Route exact path="/" component={RecipeList} />
        <Route path="/recipe/:id" component={RecipeDetails} />
      </Routes>
    </div>
  );
};

export default HomePage;
