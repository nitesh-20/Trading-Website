import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from "../variants"
import Right from "../assets/ALLY.gif"
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
          <img className='right-img' src={Right} alt="" />
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


    </div>
  );
};

export default Menu;
