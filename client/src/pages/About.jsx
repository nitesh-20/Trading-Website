import React from 'react';
import about from "../assets/about.jpeg"
import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg"

const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1 className="about-title">About JWG</h1>
        <p className="about-subtitle">We help you to get ahead of the time by saving your time and efforts during your investments.</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2 className="about-heading">Why Us?</h2>
          <p className="about-paragraph">
            JWG provides you with 15% profit in a single use. Your ultimate mate for making money, JWG delivers amazing returns of up to 600% in all finance markets.
          </p>
          <p className="about-paragraph">
            Experience the most incredible returns in both equity and derivatives markets, helping you achieve your investment goals with ease and efficiency.
          </p>
        </div>

        <div className="about-image">
          <img src={img2} alt="Investment Growth" />
        </div>
      </section>

      <div className="cta-container">
        <button className="cta-btn">Join the Movement</button>
      </div>
    </div>
  );
}

export default About;
