import './App.css';
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import { useState } from 'react';

export const LanguageContext = React.createContext();

function App() {

  const [language, setLanguage] = useState("Español");

  return (
    <Router>
      <LanguageContext.Provider value={{language, setLanguage}}>

        <div className="App">
          <div className="App-header">

            <nav>
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/settings">Settings</Link>
            </nav>

            <Routes>
              <Route path="" element={<HomePage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </div>
      </LanguageContext.Provider>

    </Router>
  );
}

export default App;
