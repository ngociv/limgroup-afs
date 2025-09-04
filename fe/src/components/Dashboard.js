import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Welcome to LimXAds Dashboard</p>
      </div>
      
      <div className="dashboard-content">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Clicks</h3>
            <p className="stat-number">1,234</p>
            <span className="stat-change positive">+12.5%</span>
          </div>
          
          <div className="stat-card">
            <h3>Conversions</h3>
            <p className="stat-number">567</p>
            <span className="stat-change positive">+8.3%</span>
          </div>
          
          <div className="stat-card">
            <h3>Revenue</h3>
            <p className="stat-number">$12,345</p>
            <span className="stat-change positive">+15.2%</span>
          </div>
          
          <div className="stat-card">
            <h3>ROI</h3>
            <p className="stat-number">3.2x</p>
            <span className="stat-change positive">+2.1%</span>
          </div>
        </div>
        
        <div className="charts-section">
          <div className="chart-container">
            <h3>Performance Overview</h3>
            <div className="chart-placeholder">
              <p>Chart will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
