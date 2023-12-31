// src/components/productpage/ProductPage.js
import React from 'react';
import './Product.css';

const ProductPage = () => {
  return (
    <div className="product-page">
      {/* Sidebar for Filters */}
      <div className="sidebar">
        {/* Add filter logic and UI here */}
        <p>Filters go here</p>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Product Header */}
        <div className="product-header">
          <h1>Product Name</h1>
        </div>

        {/* Product Cards */}
        <div className="product-cards">
          {/* Repeat this block for each card */}
          <div className="product-card">
            {/* Product Image */}
            <div className="product-image">
              {/* Add image source */}
              <img src="product-image.jpg" alt="Product" />
            </div>

            {/* Product Description */}
            <div className="product-description">
              <h3>Pet Name</h3>
              <p>Breed: Breed Name</p>
              <p>Other Info: Some information</p>
              <p>Price: $XX.XX</p>
              <button className="buy-now-btn">Buy Now</button>
            </div>
          </div>
          {/* Repeat block end */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
