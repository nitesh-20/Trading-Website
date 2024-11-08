import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Components
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import TradeSphere from './pages/TradeSphere';
import MoneyMiner from './pages/MoneyMiner';
import Markets from './pages/Markets';
import PaperTrading from './pages/PaperTrading';
import Signup from './pages/Signup';

const App = () => {
  const location = useLocation();

  // Only show the signup page if the current path is '/signup'
  const isSignupPage = location.pathname === '/signup';

  return (
    <div className="App">
      {!isSignupPage && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tradesphere" element={<TradeSphere />} />
        <Route path="/moneyminer" element={<MoneyMiner />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/paper-trading" element={<PaperTrading />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
      {/* Conditionally render other components based on the route */}
      {!isSignupPage && (
        <>
          <Menu />
          <Footer />
        </>
      )}
      
      <ToastContainer />
    </div>
  );
};

// Wrap App in Router to useLocation in functional component
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
