import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';

function RecipesPage() {
  const [initialRecipes, setInitialRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInitialRecipes = async () => {
      try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=potato');
        const data = await res.json();
        setInitialRecipes(data.meals || []);
      } catch (err) {
        console.error(err);
        setInitialRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialRecipes();
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '20px' }}>Chargement des recettes...</p>;
  }

  return <RecipeList initialRecipes={initialRecipes} />;
}

export default RecipesPage;
