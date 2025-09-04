import React from 'react';

const System = () => {
  return (
    <div className="system-page">
      <div className="page-header">
        <h1>System Management</h1>
        <p>System settings and configurations</p>
      </div>
      
      <div className="system-content">
        <div className="system-stats">
          <div className="stat-item">
            <h3>System Status</h3>
            <p className="stat-value">Healthy</p>
          </div>
          <div className="stat-item">
            <h3>Uptime</h3>
            <p className="stat-value">99.9%</p>
          </div>
          <div className="stat-item">
            <h3>Active Users</h3>
            <p className="stat-value">1,234</p>
          </div>
        </div>
        
        <div className="system-settings">
          <h3>System Settings</h3>
          <div className="settings-placeholder">
            <p>System settings will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default System;
