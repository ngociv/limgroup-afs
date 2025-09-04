import React from 'react';

const Ads = () => {
  return (
    <div className="ads-page">
      <div className="page-header">
        <h1>Ads Management</h1>
        <p>Create and manage your advertisements</p>
      </div>
      
      <div className="ads-content">
        <div className="ads-stats">
          <div className="stat-item">
            <h3>Total Ads</h3>
            <p className="stat-value">156</p>
          </div>
          <div className="stat-item">
            <h3>Active Ads</h3>
            <p className="stat-value">89</p>
          </div>
          <div className="stat-item">
            <h3>Avg. Performance</h3>
            <p className="stat-value">4.2/5</p>
          </div>
        </div>
        
        <div className="ads-list">
          <h3>Your Advertisements</h3>
          <div className="ads-grid-placeholder">
            <p>Ads grid will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
