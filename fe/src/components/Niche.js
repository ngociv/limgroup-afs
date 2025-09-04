import React from 'react';

const Niche = () => {
  return (
    <div className="niche-page">
      <div className="page-header">
        <h1>Niche Management</h1>
        <p>Manage your niche targeting and categories</p>
      </div>
      
      <div className="niche-content">
        <div className="niche-stats">
          <div className="stat-item">
            <h3>Total Niches</h3>
            <p className="stat-value">45</p>
          </div>
          <div className="stat-item">
            <h3>Active Niches</h3>
            <p className="stat-value">32</p>
          </div>
          <div className="stat-item">
            <h3>Top Performing</h3>
            <p className="stat-value">Health & Fitness</p>
          </div>
        </div>
        
        <div className="niche-list">
          <h3>Niche Categories</h3>
          <div className="niche-grid-placeholder">
            <p>Niche grid will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Niche;
