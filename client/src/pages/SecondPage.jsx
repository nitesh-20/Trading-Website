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

            <div className="parent">
                <div className="card">
                    <div className="content-box">
                        <span className="card-title">Jaiho Wealth Grow</span>
                        <p className="card-content">
                            Trading Platform
                        </p>
                        <span className="see-more">See More</span>
                    </div>
                    <div className="date-box">
                        <span className="month">JUNE</span>
                        <span className="date">29</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
