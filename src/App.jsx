// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';
import PrivacyPolicy from './pages/Privacy Policy';
import Classes from './pages/Classes';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import SinglePost from './pages/Blog/SinglePost';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/packages" element={<Packages/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/classes" element={<Classes/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/:id" element={<SinglePost/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
