import React from 'react';

const Campaign = () => {
  return (
    <div className="campaign-page">
      <div className="page-header">
        <h1>Campaign Management</h1>
        <p>Manage your advertising campaigns</p>
      </div>
      
      <div className="campaign-content">
        <div className="campaign-stats">
          <div className="stat-item">
            <h3>Active Campaigns</h3>
            <p className="stat-value">12</p>
          </div>
          <div className="stat-item">
            <h3>Total Budget</h3>
            <p className="stat-value">$25,000</p>
          </div>
          <div className="stat-item">
            <h3>Avg. CTR</h3>
            <p className="stat-value">2.8%</p>
          </div>
        </div>
        
        <div className="campaign-list">
          <h3>Your Campaigns</h3>
          <div className="campaign-table-placeholder">
            <p>Campaign table will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
