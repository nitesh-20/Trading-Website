import React from 'react';
import './Markets.css';

export default function Markets() {
  return (
    <div className="markets-container">
      <h2 className="markets-title">Explore Stocks</h2>
      <div className="stocks-grid">
        <div className="stock-card">
          <img alt="Microsoft logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2d8ceLz9sbD4RdEHPJbA-d9ir6uK7ZzO_zg&s" />
          <h3 className="stock-symbol">MSFT</h3>
          <p className="stock-name">Microsoft</p>
          <p className="stock-price">425.43 <span className="price-change">+1.25%</span></p>
        </div>
        <div className="stock-card">
          <img alt="Apple logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RACuKQ8sJxNXI17b6tLyd4vmhraPT5OYmw&s" />
          <h3 className="stock-symbol">AAPLE</h3>
          <p className="stock-name">Apple</p>
          <p className="stock-price">227.48 <span className="price-change">+2.14%</span></p>
        </div>
        <div className="stock-card">
          <img alt="Meta logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtdzKPDmF4BYfI0WCuTY416jnhZiJeAK-rg&s" />
          <h3 className="stock-symbol">META</h3>
          <p className="stock-name">Meta Platforms Inc</p>
          <p className="stock-price">591.70 <span className="price-change">+3.44%</span></p>
        </div>
        <div className="stock-card">
          <img alt="Google logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEndPkpxU-FDOQK0acJ6iuFECTI914xOelQ&s" />
          <h3 className="stock-symbol">GOOGLE</h3>
          <p className="stock-name">Alphabet</p>
          <p className="stock-price">591.70 <span className="price-change">+3.44%</span></p>
        </div>
      </div>
      <div className="exchange-info">
        <p>Exchange - Tech • Software • Durable Goods • Financial Services • Med Tech • Retail • Consumable Goods • Entertainment</p>
      </div>
    </div>
  );
}
