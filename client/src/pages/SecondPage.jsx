import React from 'react';
import './SecondPage.css'; 

export default function SecondPage() {
    return (
        <div className="second-page-container">
            <h1 className="second-page-title">JAIHO WEALTH GROW</h1>
            <p className="second-page-description">
            Unlock the power of smart investing with JaiHo Wealth Grow. Designed for both seasoned traders and newcomers, our app offers advanced tools for margin trading, real-time charts, and seamless order execution—all in one place. Trusted by thousands, JaiHo Wealth Grow evolves continuously to give you a competitive edge, helping you grow your wealth with confidence.
          </p>
            <button className="second-page-btn">
                Explore JWG →
            </button>
            <div className="second-page-images">
                <img
                    alt="Mobile trading app interface"
                    src="https://i.pinimg.com/474x/83/b6/82/83b682e605f4dc0782d951d144fa954c.jpg"
                    className="second-page-image"
                />
                <img
                    alt="Mobile trading app interface"
                    src="https://openui.fly.dev/openui/300x500.svg?text=Mobile+App"
                    className="second-page-image"
                />
            </div>
        </div>
    );
}
