import React from 'react';
import './TradeSphere.css'; // Import the CSS file

const TradeSphere = () => {
  return (
    <div>
    <div className="btn">
          <button>Contest</button>
          <button>Workshop</button>
        </div>

          <div className="tradesphere-container">
      <h2 className="tradesphere-title">All Upcoming Matches</h2>

      <div className="match-container">
        <div className="match">
          <h3 className="match-title">ECS T10 Malta</h3>
          <div className="match-card">
            <div>
              <span className="team-name">SOC</span>
              <span className="time-remaining"> 1h 01m</span>
              <span className="match-time">05:00 PM</span>
              <p className="team-description">Southern Crusaders...</p>
            </div>
            <div>
              <span className="team-name">GZZ</span>
              <span className="team-subtitle">Gozo Zalmi</span>
            </div>
          </div>
          <p className="prize-amount">Mega ₹24 Lakhs</p>
        </div>
      </div>

      <div className="match-container">
        <div className="match">
          <h3 className="match-title">Namibia Castle Lite T20 Franchise</h3>
          <div className="match-card">
            <div>
              <span className="team-name">GWJ</span>
              <span className="time-remaining"> 1h 46m</span>
              <span className="match-time">05:45 PM</span>
              <p className="team-description">Green Windhoek J...</p>
            </div>
            <div>
              <span className="team-name">FRE</span>
              <span className="team-subtitle">Fish River Eagles</span>
            </div>
          </div>
          <p className="prize-amount">Mega ₹8 Lakhs</p>
        </div>
      </div>

      <div className="match-container">
        <div className="match">
          <h3 className="match-title">Emirates D50</h3>
          <div className="match-card">
            <div>
              <span className="team-name">FUJ</span>
              <span className="time-remaining"> 2h 01m</span>
              <span className="match-time">06:00 PM</span>
              <p className="team-description">Fujairah</p>
            </div>
            <div>
              <span className="team-name">SHA</span>
              <span className="team-subtitle">Sharjah</span>
            </div>
          </div>
          <p className="prize-amount">Mega ₹5.5 Lakhs</p>
        </div>
      </div>

      <div className="match-container">
        <div className="match">
          <h3 className="match-title">West Indies Super50 Cup</h3>
          <div className="match-card">
            <div>
              <span className="team-name">TRI</span>
              <span className="time-remaining"> 2h 31m</span>
              <span className="match-time">06:30 PM</span>
              <p className="team-description">T&T Red Force</p>
            </div>
            <div>
              <span className="team-name">BAR</span>
              <span className="team-subtitle">Barbados Pride</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default TradeSphere;
