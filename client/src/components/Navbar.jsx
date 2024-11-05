import React, { useState } from "react";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import Logo from '../assets/logo.ico';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="header__brand">
        <span className="header__title">
          <img src={Logo} alt="" />
        </span>
      </div>
      
      {/* <div className="header__toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div> */}
      <div className={`header__menu ${isMenuOpen ? "active" : ""}`}>
        <a href="#" className="header__link">Trading</a>
        <a href="#" className="header__link">Investing</a>
        <a href="#" className="header__link">Top Markets</a>
        <a href="#" className="header__link">Education</a>
        <a href="#" className="header__link">Company</a>
      </div>

      {/* Actions (Login and Search Icon) */}
      <div className="header__actions">
        <button className="header__login-btn">Login</button>
        <img aria-hidden="true" alt="search-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🔍" />
      </div>
    </div>
  );
};

export default Navbar;
