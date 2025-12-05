import React, { useState } from 'react';
import FavorisList from './FavorisList';

function FavorisPage() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites(favorites.filter((f) => f.idMeal !== id));
  };

  const showDetails = (recipe) => {
    alert(`Voir détails: ${recipe.strMeal}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      {favorites.length === 0 ? (
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Aucun favori pour le moment
        </p>
      ) : (
        <FavorisList
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onShowDetails={showDetails}
        />
      )}
    </div>
  );
}

export default FavorisPage;