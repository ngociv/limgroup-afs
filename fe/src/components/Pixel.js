import React from 'react';

const Pixel = () => {
  return (
    <div className="pixel-page">
      <div className="page-header">
        <h1>Pixel Management</h1>
        <p>Manage your tracking pixels and conversions</p>
      </div>
      
      <div className="pixel-content">
        <div className="pixel-stats">
          <div className="stat-item">
            <h3>Total Pixels</h3>
            <p className="stat-value">67</p>
          </div>
          <div className="stat-item">
            <h3>Active Pixels</h3>
            <p className="stat-value">45</p>
          </div>
          <div className="stat-item">
            <h3>Total Conversions</h3>
            <p className="stat-value">12,345</p>
          </div>
        </div>
        
        <div className="pixel-list">
          <h3>Tracking Pixels</h3>
          <div className="pixel-table-placeholder">
            <p>Pixel table will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pixel;
