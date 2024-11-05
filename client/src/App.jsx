import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './components/Footer';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Menu />
      <Footer />
    </div>
  </Router>
);

export default App;
