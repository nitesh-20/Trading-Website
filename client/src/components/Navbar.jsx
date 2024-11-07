import React, { useState } from "react";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import Logo from '../assets/logo1.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="header__brand">
        <span className="header__title">
          {/* <img src={Logo} alt="" /> */}
        </span>
      </div>
      
      {/* <div className="header__toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div> */}
      <div className={`header__menu ${isMenuOpen ? "active" : ""}`}>
        <a href="#" className="header__link">About</a>
        <a href="#" className="header__link">TradeSphere</a>
        <a href="#" className="header__link">MoneyMiner</a>
        <a href="#" className="header__link">Markets</a>
        <a href="#" className="header__link">Paper Trading</a>
      </div>

      {/* Actions (Login and Search Icon) */}
      <div className="header__actions">
        <button className="header__login-btn">Sign up</button>
        {/* <img aria-hidden="true" alt="search-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🔍" /> */}
      </div>
    </div>
  );
};

export default Navbar;
