import React, { useEffect, useState } from 'react';
import './Markets.css';

const Markets = () => {
  const [symbol, setSymbol] = useState('AAPL'); // Default symbol

  useEffect(() => {
    // Dynamically load TradingView's script
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      new window.TradingView.widget({
        "width": 980,
        "height": 610,
        "symbol": symbol,  // Dynamically change symbol
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_top_toolbar": true,
        "save_image": false,
        "container_id": "tradingview_chart"
      });
    };
  }, [symbol]); // Trigger re-render on symbol change

  return (
    <div className="markets-container">
      <h2 className="markets-title">Live TradingView Charts</h2>

      {/* Dropdown to select symbol */}
      <div className="symbol-selector">
        <select onChange={(e) => setSymbol(e.target.value)} value={symbol}>
          <option value="AAPL">Apple (AAPL)</option>
          <option value="GOOG">Google (GOOG)</option>
          <option value="MSFT">Microsoft (MSFT)</option>
          <option value="BTCUSD">Bitcoin (BTC/USD)</option>
          <option value="ETHUSD">Ethereum (ETH/USD)</option>
        </select>
      </div>

      {/* TradingView Widget container */}
      <div id="tradingview_chart" className="tradingview-widget-container"></div>
    </div>
  );
};

export default Markets;
