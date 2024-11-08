import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from "../variants"

const Menu = () => {
  return (
    <div className="wealth-advisory">
      <div className="content">
        
        {/* Left Side: Main Title Text Only */}
        <motion.div
        variants={fadeIn("up",0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}

        className="text-section">
          <h1 className="title">Global #1 Trusted 
          <br />Wealth Research
           Platform</h1>

           <div className='money-pa'>
          <button className='money-btn'>Your Ultimate Money Making</button>
        </div>
        </motion.div>
       
        <div className="right-contain">
         {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CVJu8poNPfXME1CssZlAFIy3kCaq2q15Mg&s" alt="" /> */}
        </div>
        
      </div>
      <motion.div
       variants={fadeIn("up",0.3)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false, amount:0.7}}
      className="signup">
        <button className='sign-btn'>Signup for free</button>
      </motion.div>
            {/* Divider Line */}
            <div className="divider"></div>

{/* New Section */}
<div className="new-section">
<div className="widget bg-card text-card-foreground p-6 rounded-lg shadow-lg">
      <h2 className="widget-title">PORTFOLIO HEALTH</h2>
      <h3 className="widget-subtitle">Track & Manage Your Portfolio Effortlessly</h3>
      <p className="widget-description">Identify concerns, get detailed performance insights & fix critical issues.</p>
      <div className="widget-stats">
        <div className="widget-stat">$2 Bn+</div>
        <div className="widget-stat">1 Mn+</div>
      </div>
      <div className="widget-stat-labels">
        <div className="widget-label">Assets Powered</div>
        <div className="widget-label">Portfolio Analyzed</div>
      </div>
      <div className="widget-insights">
        <h4 className="widget-insights-title">All portfolio insights in a single click</h4>
        <div className="widget-insights-box">
          <div className="widget-forecast">
            <span className="widget-forecast-text">→ 21.2% potential returns</span>
            <img alt="portfolio-forecast" src="https://openui.fly.dev/openui/100x50.svg?text=📈" className="widget-forecast-icon" />
          </div>
        </div>
      </div>
    </div>

  {/* Add any additional content for this section */}
</div>

    </div>
  );
};

export default Menu;
