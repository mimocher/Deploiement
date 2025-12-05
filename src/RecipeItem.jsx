function RecipeItem({ recipe, onToggleFavorite, isFavorite, onShowDetails }) {
  return (
    <div style={styles.recipeCard}>
      <div style={styles.imageContainer}>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          style={styles.image}
        />
        <button
          onClick={() => onToggleFavorite(recipe.idMeal)}
          style={styles.favoriteButton}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
      <h3 style={styles.title}>{recipe.strMeal}</h3>
      <p style={styles.category}>Catégorie: {recipe.strCategory}</p>
  
      <div style={styles.buttonContainer}>
        <button 
          onClick={() => onShowDetails(recipe)}
          style={styles.detailsButton}
        >
          📖 Voir détails
        </button>
        
        {recipe.strSource && (
          <a href={recipe.strSource} target="_blank" rel="noopener noreferrer" style={styles.link}>
            <button style={styles.sourceButton}>
              🔗 Source
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

const styles = {
  recipeCard: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '15px',
    margin: '15px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    width: '250px',
    textAlign: 'center',
    border: '1px solid #e0e0e0'
  },
  imageContainer: {
    position: 'relative',
    marginBottom: '15px'
  },
  image: {
    width: '100%',
    height: '180px',
    borderRadius: '8px',
    objectFit: 'cover'
  },
  favoriteButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'rgba(255,255,255,0.8)',
    border: 'none',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    fontSize: '18px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
  },
  title: {
    margin: '0 0 5px 0',
    fontSize: '18px',
    color: '#333'
  },
  category: {
    margin: '0 0 15px 0',
    color: '#666',
    fontSize: '14px'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  detailsButton: {
    backgroundColor: '#864cafff',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  sourceButton: {
    backgroundColor: '#f321adff',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    width: '100%'
  },
  link: {
    textDecoration: 'none',
    width: '100%'
  }
};

export default RecipeItem;