// ZerodhaInfo.js
import React from 'react';

const SecondPage = () => {
  return (
    <div className="zerodha-info">
      {/* Left Section with Text */}
      <div className="text-content">
        <h1 className="title">Trusted by Millions</h1>
        <p className="paragraph">
          Our priority is you. Over 1.5 crore customers rely on us, investing ₹4.5+ lakh crores and driving 15% of India's daily retail trading volumes.
        </p>

        <h2 className="subtitle">Transparency and Simplicity</h2>
        <p className="paragraph">
          No tricks, spam, or distracting notifications. Our user-centered apps offer a smooth experience, empowering you to invest at your own pace.
        </p>

        <h2 className="subtitle">More Than an App</h2>
        <p className="paragraph">
          Experience a complete ecosystem. Our partnerships with 30+ fintech startups bring you specialized services tailored to enhance your financial journey.
        </p>

        <h2 className="subtitle">Financial Well-being First</h2>
        <p className="paragraph">
          With features like Nudge and Kill Switch, we’re more than a platform. We’re here to support smarter financial decisions and sustainable growth.
        </p>

        <div className="button-group">
          <a href="#" className="button explore">Explore our products →</a>
          <a href="#" className="button demo">Try Kite demo →</a>
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="image-section">
        <img src="path_to_image.jpg" alt="Zerodha graphic" />
      </div>
    </div>
  );
};

export default SecondPage;
