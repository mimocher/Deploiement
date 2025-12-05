import { useState } from 'react';

function SearchBar  ({ onSearch, loading })  {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (searchTerm.length < 3) {
      setError('La zone de recherche doit contenir au moins 3 caractères');
      return;
    }
    setError('');
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length < 3 ) {
      setError('La zone de recherche doit contenir au moins 3 caractères');
    } else {
      setError('');
    }
  };

  return (
    <div
      style={{
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <div  style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Rechercher une recette..."
            style={{
            padding: '10px 15px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            width: '250px',
            fontSize: '16px',
            }}
          />
      <button 
        onClick={handleSearch} 
        disabled={loading || searchTerm.length < 3}
        style={{
            padding: '10px 20px',
            backgroundColor:
              loading || searchTerm.length < 3 ? '#aaa' : '#3f51b5',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            cursor:
              loading || searchTerm.length < 3 ? 'not-allowed' : 'pointer',
          }}
      >
        Rechercher
      </button>
      </div>
      
      {error && <p  style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{error}</p>}
    </div>
  );
};
export default SearchBar;
