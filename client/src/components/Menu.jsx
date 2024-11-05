import React from 'react';
// import './PaymentForm.scss'; // Import your SCSS styles

const Menu = () => {
  return (
    <div className="payment-container">
      <div className="payment-form">
        <h2>Payment Details</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="Enter Phone" />
          </div>
          <div className="form-group">
            <label htmlFor="coupon">Coupon Code</label>
            <input type="text" id="coupon" placeholder="Enter Coupon Code" />
            <button type="button">Apply</button>
          </div>
          <div className="form-group checkbox-group">
            <label>
              <input type="checkbox" />
              <span className="description">Add GST details (optional)</span>
            </label>
          </div>
          <div className="form-group additional-info">
            <label className="flex items-center">
              <input type="checkbox" />
              <span className="text-sm text-muted-foreground">YES! I want to get everything.</span>
            </label>
            <ul>
              <li>1000+ YouTube Logos</li>
              <li>50+ Premium Background Music</li>
              <li>300+ YouTube Thumbnail Background Bundle</li>
              <li>100+ Unique YouTube Channel Banners</li>
              <li>Super Bundle of 500+ Motion Graphics</li>
            </ul>
            <div className="price">
              <span className="original-price">₹399.00</span>
              <span className="discounted-price">₹199.00</span>
            </div>
          </div>
        </form>
      </div>

      <div className="media-section">
        <img src="https://static-cse.canva.com/blob/1760641/1600w-wK95f3XNRaM.jpg" alt="Media" />
        <div className="form-group webinar-info">
          <h3>10th Nov: Make Money on YouTube Without Showing Your Face | 10th November, 2024</h3>
          <img src="https://openui.fly.dev/openui/300x200.svg?text=Webinar+Image" alt="Webinar on YouTube" />
          <p>In this exclusive webinar, you will learn:</p>
          <ol>
            <li>You will first unlearn all the myths of the YouTube algorithm taught to you by fake gurus.</li>
            <li>Walkthrough of how the YouTube algorithm actually works.</li>
            <li>Rudy will do a proper breakdown of a successful YT channel and teach you how you can do it as well. (L...)</li>
          </ol>
          <p><strong>Date of Masterclass:</strong> 10th November, 2024</p>
          <p><strong>Time of Masterclass:</strong> 7:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
