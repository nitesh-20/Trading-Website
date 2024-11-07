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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ85WQME7UPaUERaG2eGJ7KOvo5MggXNHbDWQ&s"
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