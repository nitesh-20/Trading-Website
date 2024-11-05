import React from 'react'

const Menu = () => {
  return (
    <div>
       <div className="wealth-advisory">
      <div className="head">
      <h1 className="title">Your Trusted Partner in Wealth 
        <br /> Research & Trading Advisory</h1>
      </div>

      <div className="image-container">
        <img
          src="https://brokers.education.investing.com/wp-content/uploads/2023/12/CFD-vs-Forex-Trading-Unpacking-the-Differences.jpg"
          alt="Portfolio health visuals"
          className="portfolio-image"
        />
      </div>

      <div className="download-buttons">
        <a href="#" className="google-play">Get it on Google Play</a>
        <a href="#" className="app-store">Download on the App Store</a>
      </div>

      <div className="download-button">
        <button className="download">Download</button>
      </div>
    </div>
    </div>
  )
}

export default Menu