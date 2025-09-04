import React from 'react';

const Advertiser = () => {
  return (
    <div className="advertiser-page">
      <div className="page-header">
        <h1>Advertiser Management</h1>
        <p>Manage your advertiser profiles and settings</p>
      </div>
      
      <div className="advertiser-content">
        <div className="advertiser-stats">
          <div className="stat-item">
            <h3>Total Advertisers</h3>
            <p className="stat-value">156</p>
          </div>
          <div className="stat-item">
            <h3>Active Advertisers</h3>
            <p className="stat-value">134</p>
          </div>
          <div className="stat-item">
            <h3>Avg. Performance</h3>
            <p className="stat-value">4.3/5</p>
          </div>
        </div>
        
        <div className="advertiser-list">
          <h3>Advertiser Profiles</h3>
          <div className="advertiser-table-placeholder">
            <p>Advertiser table will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertiser;
