function RecipeDetails ({ recipe, onClose, onToggleFavorite, isFavorite }) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push({ ingredient, measure });
    }
  }
  return (
    <div style={{ border: '2px solid black', padding: '20px', margin: '20px' }}>
      <button onClick={onClose}>✕ Fermer</button>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} width="300" />
      <p>Catégorie: {recipe.strCategory}</p>
      {recipe.strArea && <p>Origine: {recipe.strArea}</p>}    
      <button onClick={() => onToggleFavorite(recipe.idMeal)}>
        {isFavorite ? 'Retirer la recette des favoris' : '⭐Ajouter la recette aux favoris'}
      </button>
      <h3>Ingrédients:</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>
            {item.ingredient} {item.measure && `- ${item.measure}`}
          </li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.strInstructions}</p>

      {recipe.strSource && (
        <a href={recipe.strSource}>
          <button>Voir la source</button>
        </a>
      )}
      {recipe.strYoutube && (
        <a href={recipe.strYoutube}>
          <button>Voir la vidéo</button>
        </a>
      )}
    </div>
  );

};
export default RecipeDetails;