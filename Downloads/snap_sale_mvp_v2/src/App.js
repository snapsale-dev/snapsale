import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddListingPage from './pages/AddListingPage';

function App() {
  return (
    <Router>
      <div className="p-4 bg-gray-100 min-h-screen">
        <nav className="mb-4">
          <Link to="/" className="mr-4 text-blue-500">Strona Główna</Link>
          <Link to="/add" className="text-green-500">Dodaj Ogłoszenie</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddListingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;