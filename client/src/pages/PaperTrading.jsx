import React from 'react';
import './PaperTrading.css';

const PaperTrading = () => {
  return (
    <div className="papertrading-page">
      <header className="papertrading-header">
        <h1>Welcome to Paper Trading</h1>
        <p>Practice trading in a risk-free environment and refine your strategies.</p>
      </header>

      <section className="papertrading-benefits">
        <h2>Why Paper Trading?</h2>
        <div className="benefit-card">
          <h3>Risk-Free Learning</h3>
          <p>Trade with virtual money to understand market trends without any financial loss.</p>
        </div>
        <div className="benefit-card">
          <h3>Real-Time Market Data</h3>
          <p>Access live market data to practice trading in realistic scenarios.</p>
        </div>
        <div className="benefit-card">
          <h3>Sharpen Your Skills</h3>
          <p>Build confidence and refine your trading strategies over time.</p>
        </div>
      </section>

      <section className="papertrading-steps">
        <h2>How to Get Started?</h2>
        <div className="step">
          <span>1</span>
          <p>Create an account and log in to the platform.</p>
        </div>
        <div className="step">
          <span>2</span>
          <p>Access the virtual trading interface to start exploring.</p>
        </div>
        <div className="step">
          <span>3</span>
          <p>Analyze, trade, and track your performance without risks!</p>
        </div>
      </section>

      <section className="papertrading-call-to-action">
        <h2>Begin Your Trading Journey Today</h2>
        <p>Join Paper Trading and take the first step towards mastering the market.</p>
        <button className="cta-button">Start Now</button>
      </section>
    </div>
  );
};

export default PaperTrading;
