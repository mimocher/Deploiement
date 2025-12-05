import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RecipesPage from './RecipesPages';
import FavorisPage from './FavorisPage';
import SearchPage from './SearchPage';

function App() {
  return (
      
      <Routes>
        
        <Route path="/" element={<Navigate to="/recipes" />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/favoris" element={<FavorisPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
  );
}

export default App;