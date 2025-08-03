import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">MexaUSA</h1>
      <nav className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/audit" className="text-gray-700 hover:text-blue-600">Audit</Link>
        <Link to="/privacy-policy" className="text-gray-700 hover:text-blue-600">Privacy</Link>
        <Link to="/terms-of-service" className="text-gray-700 hover:text-blue-600">Terms</Link>
        <Link to="/consent-agreement" className="text-gray-700 hover:text-blue-600">Consent</Link>
      </nav>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="border rounded p-1"
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </header>
  );
};

export default Header;
