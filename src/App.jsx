// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';
import PrivacyPolicy from './pages/Privacy Policy';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/packages" element={<Packages/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
