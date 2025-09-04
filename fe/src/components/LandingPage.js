import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="page-header">
        <h1>Landing Page Management</h1>
        <p>Create and manage your landing pages</p>
      </div>
      
      <div className="landing-content">
        <div className="landing-stats">
          <div className="stat-item">
            <h3>Total Pages</h3>
            <p className="stat-value">24</p>
          </div>
          <div className="stat-item">
            <h3>Active Pages</h3>
            <p className="stat-value">18</p>
          </div>
          <div className="stat-item">
            <h3>Avg. Conversion</h3>
            <p className="stat-value">3.2%</p>
          </div>
        </div>
        
        <div className="landing-list">
          <h3>Your Landing Pages</h3>
          <div className="page-list-placeholder">
            <p>Landing page list will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
