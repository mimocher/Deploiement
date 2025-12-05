import React, { useState } from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

function SearchPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (term) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
      );
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (err) {
      console.error(err);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Recherche de Recettes</h1>
      <SearchBar onSearch={handleSearch} loading={loading} />
      {loading && <p style={{ textAlign: 'center', color: '#777' }}>Chargement...</p>}
      {!loading && recipes.length === 0 && (
        <p style={{ textAlign: 'center', color: '#777', marginTop: '20px' }}>
          Aucun résultat pour le moment
        </p>
      )}
      {!loading && recipes.length > 0 && <RecipeList initialRecipes={recipes} />}
    </div>
  );
}

export default SearchPage;