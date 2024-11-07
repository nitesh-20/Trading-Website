import React from 'react';

const Menu = () => {
  return (
    <div className="wealth-advisory">
      <div className="content">
        
        {/* Left Side: Main Title Text Only */}
        <div className="text-section">
          <h1 className="title">Global #1 Trusted 
          <br />Wealth Research
           Platform</h1>

           <div className='money-pa'>
          <button className='money-btn'>Your Ultimate Money Making</button>
        </div>
        </div>
       
        
        {/* Right Side: Spline 3D Model */}
        <div className="right-contain">
         {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CVJu8poNPfXME1CssZlAFIy3kCaq2q15Mg&s" alt="" /> */}
        </div>
        
      </div>
      <div className="signup">
        <button className='sign-btn'>Signup for free</button>
      </div>
    </div>
  );
};

export default Menu;
