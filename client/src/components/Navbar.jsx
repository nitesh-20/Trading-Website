import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/bg.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');  // Navigate to the signup page
  }

  return (
    <div className="header">
      <div className="header__brand">
        <span className="header__title">
          <img src={Logo} alt="Brand Logo" />
        </span>
      </div>

      <div className={`header__menu ${isMenuOpen ? "active" : ""}`}>
        <Link to="/about" className="header__link">About</Link>
        <Link to="/tradesphere" className="header__link">TradeSphere</Link>
        <Link to="/moneyminer" className="header__link">MoneyMiner</Link>
        <Link to="/markets" className="header__link">Markets</Link>
        <Link to="/paper-trading" className="header__link">Paper Trading</Link>
      </div>

      {/* Signup Button */}
      <div className="header__actions">
        <button className="header__login-btn" onClick={handleSignupClick}>Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
