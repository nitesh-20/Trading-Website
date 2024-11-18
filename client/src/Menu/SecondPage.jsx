import React from "react";
import "./SecondPage.css";

const SecondPage = () => {
  return (
    <div className="second-page-container">
      <h1 className="second-page-title">
      My mission is to provide proven, profitable <br /> education in all financial markets.
      </h1>
      <div className="second-page-grid">
        <div className="card">
          <h2 className="card-title">Practice and Learning</h2>
          <p className="card-description">
            Enter the world of day trading with a hands-on approach that combines learning and trading. Don’t just learn the theory, apply it directly in live trading sessions under the guidance of professionals.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Implement</h2>
          <p className="card-description">
            Learn not only the theoretical aspects of Day trading but also how to apply these skills effectively in real trading situations. Develop discipline and decision-making skills to succeed.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Transform</h2>
          <p className="card-description">
            Discover the power of algorithms as your trading guide. Transform your skills and become a systematic, profitable trader.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">VIP Community</h2>
          <p className="card-description">
            Join an elite community of traders, share knowledge, expand networks, and strive for consistent profitability and lasting success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
