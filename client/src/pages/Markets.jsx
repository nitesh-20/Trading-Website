import React from 'react';
import './Markets.css';

const Markets = () => {
  return (
    <div className="markets-container">
      <header className="markets-header">
        <h1>Market Trends & Insights</h1>
        <p>Stay ahead in trading with real-time updates, analytics, and tools designed to empower your decisions.</p>
      </header>

      <section className="live-markets">
        <h2>Live Market Updates</h2>
        <div className="market-grid">
          <div className="market-card">
            <h3>NASDAQ</h3>
            <p className="price">14,200.30 <span className="change positive">+1.23%</span></p>
            <p>Tech stocks on the rise!</p>
          </div>
          <div className="market-card">
            <h3>SENSEX</h3>
            <p className="price">61,200.45 <span className="change negative">-0.56%</span></p>
            <p>Mixed performance in Indian markets.</p>
          </div>
          <div className="market-card">
            <h3>FTSE 100</h3>
            <p className="price">7,345.60 <span className="change positive">+0.89%</span></p>
            <p>European markets gaining momentum.</p>
          </div>
        </div>
      </section>

      <section className="trading-tools">
        <h2>Trading Tools</h2>
        <div className="tool-grid">
          <div className="tool-card">
            <h3>Stock Screener</h3>
            <p>Find stocks that meet your criteria with customizable filters.</p>
            <button>Try Now</button>
          </div>
          <div className="tool-card">
            <h3>Technical Analysis</h3>
            <p>Analyze market trends using advanced charting tools.</p>
            <button>Explore</button>
          </div>
          <div className="tool-card">
            <h3>Risk Calculator</h3>
            <p>Manage your trades effectively by calculating risks and rewards.</p>
            <button>Calculate</button>
          </div>
        </div>
      </section>

      <section className="featured-news">
        <h2>Featured News</h2>
        <div className="news-grid">
          <div className="news-card">
            <h3>Global Markets Soar</h3>
            <p>Tech sector drives growth across major markets.</p>
            <a href="#">Read More</a>
          </div>
          <div className="news-card">
            <h3>Crypto Regulation Updates</h3>
            <p>Governments take a step closer to regulating digital assets.</p>
            <a href="#">Read More</a>
          </div>
          <div className="news-card">
            <h3>Gold Prices Drop</h3>
            <p>Investors shift focus to equities as risk appetite increases.</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Markets;
