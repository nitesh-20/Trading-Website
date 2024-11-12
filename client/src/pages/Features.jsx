import React from 'react';
import './features.css';

const Widget = () => (
    <div className="widget-container">
        <h4 className='widget-head'>FEATURES</h4>
        <h2 className="widget-title">Powerful features just for you</h2>
        <div className="widget-grid">
            <div className="widget-card">
                <div className="icon-container">
                    <img src="https://cdn.prod.website-files.com/64c7cbed78dc42eff4ca6ff0/64cbd89a4f34df4d35247e79_IMG%201.png" loading="lazy" sizes="(max-width: 479px) 89vw, (max-width: 991px) 45vw, (max-width: 1919px) 29vw, 394px" srcset="https://cdn.prod.website-files.com/64c7cbed78dc42eff4ca6ff0/64cbd89a4f34df4d35247e79_IMG%201-p-500.png 500w, https://cdn.prod.website-files.com/64c7cbed78dc42eff4ca6ff0/64cbd89a4f34df4d35247e79_IMG%201.png 760w" alt="Integrations graphics" class="column-image corners-xl"></img>
                </div>
                <h3 className="card-title">Integrations</h3>
                <p className="card-description">
                    Effortlessly integrate various trading tools and platforms, enabling unified access to real-time market data, enhanced decision-making, and streamlined trading operations for maximized performance.</p>
            </div>
            <div className="widget-card">
                <div className="icon-container">
                    <img src="https://cdn.prod.website-files.com/64c7cbed78dc42eff4ca6ff0/64cbd89b1a74acc73b2876e2_IMG%202.png" loading="lazy" sizes="(max-width: 479px) 89vw, (max-width: 991px) 45vw, (max-width: 1919px) 29vw, 394px" srcset="https://cdn.prod.website-files.com/64c7cbed78dc42eff4ca6ff0/64cbd89b1a74acc73b2876e2_IMG%202-p-500.png 500w, https://cdn.prod.website-files.com/64c7cbed78dc42eff4ca6ff0/64cbd89b1a74acc73b2876e2_IMG%202.png 760w" alt="Card control graphics
" class="column-image corners-xl"></img>
                </div>
                <h3 className="card-title">Card control</h3>
                <p className="card-description">Gain full control over your cards with advanced settings for limits, security, and instant adjustments—empowering you to manage your spending and safeguard transactions effortlessly.</p>
            </div>
            <div className="widget-card">
                <div className="icon-container">
                    <img src="https://cdn.prod.website-files.com/64c7cbed78dc42eff4ca6ff0/64cbd89ab2d45e68e0bf337a_IMG%2003.png" loading="lazy" sizes="(max-width: 479px) 89vw, (max-width: 991px) 45vw, (max-width: 1919px) 29vw, 394px" srcset="https://cdn.prod.website-files.com/64c7cbed78dc42eff4ca6ff0/64cbd89ab2d45e68e0bf337a_IMG%2003-p-500.png 500w, https://cdn.prod.website-files.com/64c7cbed78dc42eff4ca6ff0/64cbd89ab2d45e68e0bf337a_IMG%2003.png 760w" alt="Analytics &amp; report graphics" class="column-image corners-xl"></img>
                </div>
                <h3 className="card-title">Analytics & report</h3>
                <p className="card-description">Access in-depth analytics and comprehensive reports that track performance, uncover trends, and drive data-informed strategies to elevate your trading success.</p>
            </div>
        </div>
    </div>
);

export default Widget;
