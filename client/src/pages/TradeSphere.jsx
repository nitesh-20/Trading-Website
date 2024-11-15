import React from 'react';
import './TradeSphere.css';

const TradeSphere = () => {
  return (
    <div className="tradesphere-page">
      <header className="tradesphere-header">
        <h1>Welcome to TradeSphere</h1>
        <p>Your gateway to smarter trading and investment decisions.</p>
      </header>
      <section className="tradesphere-content">
        <div className="card">
          <h2>Advanced Analytics</h2>
          <p>Get real-time insights to make informed decisions.</p>
        </div>
        <div className="card">
          <h2>Global Markets</h2>
          <p>Explore opportunities across a variety of global markets.</p>
        </div>
        <div className="card">
          <h2>Secure Transactions</h2>
          <p>Trade with confidence using our secure platform.</p>
        </div>
      </section>
    </div>
  );
};

export default TradeSphere;
