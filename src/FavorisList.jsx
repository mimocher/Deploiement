import RecipeItem from './RecipeItem';
function FavorisList ({ favorites, onToggleFavorite, onShowDetails })  {
  if (favorites.length === 0) {
    return <h2 style={{ textAlign: "center", color: "#777", marginTop: "30px" }}>Aucune recette favorite pour le moment</h2>;
  }

  return (
    <div  style={{ padding: "20px" }}>
      <h2 >
        ⭐ Mes Recettes Favorites ({favorites.length})
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {favorites.map(recipe => (
        <RecipeItem
          key={recipe.idMeal}
          recipe={recipe}
          onToggleFavorite={onToggleFavorite}
          isFavorite={true}
          onShowDetails={onShowDetails}
        />
      ))}
      </div>
      
    </div>
  );
};
export default FavorisList;