import { useState } from 'react';
import RecipeItem from './RecipeItem';
import RecipeDetails from './RecipeDetails';
import FavorisList from './FavorisList';

function RecipeList({ initialRecipes = [] }) {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [favorites, setFavorites] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorite = (recipeId) => {
    const recipe =
      recipes.find((r) => r.idMeal === recipeId) ||
      favorites.find((r) => r.idMeal === recipeId);
    if (!recipe) return;

    const isFav = favorites.some((f) => f.idMeal === recipeId);
    if (isFav) {
      setFavorites(favorites.filter((f) => f.idMeal !== recipeId));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  const isFavorite = (recipeId) => favorites.some((f) => f.idMeal === recipeId);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#333333ff' }}>Maroua's Kitchen</h1>

      <div style={{ display: 'flex', gap: '10px', marginTop: '20px', justifyContent: 'center' }}>
        <button
          onClick={() => setShowFavorites(false)}
          style={{ padding: '10px 20px', background: '#a74cafff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Lister tous
        </button>
        <button
          onClick={() => setShowFavorites(true)}
          style={{ padding: '10px 20px', background: '#ff00a2ff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Lister favoris ({favorites.length})
        </button>
      </div>

      <hr style={{ margin: '20px 0' }} />

      {showFavorites ? (
        favorites.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#777', marginTop: '20px' }}>
            Aucune recette favorite pour le moment
          </p>
        ) : (
          <FavorisList favorites={favorites} onToggleFavorite={toggleFavorite} onShowDetails={setSelectedRecipe} />
        )
      ) : recipes.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#777', marginTop: '20px' }}>
          Aucune recette disponible
        </p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '20px' }}>
          {recipes.map((recipe) => (
            <RecipeItem key={recipe.idMeal} recipe={recipe} onToggleFavorite={toggleFavorite} isFavorite={isFavorite(recipe.idMeal)} onShowDetails={setSelectedRecipe} />
          ))}
        </div>
      )}

      {selectedRecipe && (
        <RecipeDetails recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} onToggleFavorite={toggleFavorite} isFavorite={isFavorite(selectedRecipe.idMeal)} />
      )}
    </div>
  );
}

export default RecipeList;
