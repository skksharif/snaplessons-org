import React from 'react';
import './AnalystPerspectives.css';

const AnalystPerspectives = () => {
  return (
    <div className="analyst-perspectives">
      <h3>ANALYST PERSPECTIVES</h3>
      <h1>How Snaplessons is leading the way forward</h1>
      <div className="cards-container">
        <div className="card">
          <div className="card-icon">📋</div>
          <h2>2024 Gartner® Magic Quadrant™ for WMS</h2>
          <p>Snaplessons positioned as a Leader, for 6th consecutive time, in 2024 Gartner® Magic Quadrant™ for Warehouse Management Systems.</p>
          <a href="#">Read more →</a>
        </div>
        <div className="card">
          <div className="card-icon">📈</div>
          <h2>2023 Gartner® Magic Quadrant™ for Cloud ERP</h2>
          <p>Snaplessons is named a Leader in the 2023 Gartner® Magic Quadrant™ for Cloud ERP for Product-Centric Enterprises.</p>
          <a href="#">Read more →</a>
        </div>
        <div className="card">
          <div className="card-icon">📰</div>
          <h2>Snaplessons named a "Leader" in IDC MarketScape</h2>
          <p>The IDC MarketScape study evaluated SaaS and cloud-enabled large enterprise ERP applications.</p>
          <a href="#">Read more →</a>
        </div>
      </div>
    </div>
  );
};

export default AnalystPerspectives;
