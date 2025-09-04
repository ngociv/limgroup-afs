import React from 'react';

const Rule = () => {
  return (
    <div className="rule-page">
      <div className="page-header">
        <h1>Rule Management</h1>
        <p>Configure automation rules and conditions</p>
      </div>
      
      <div className="rule-content">
        <div className="rule-stats">
          <div className="stat-item">
            <h3>Active Rules</h3>
            <p className="stat-value">8</p>
          </div>
          <div className="stat-item">
            <h3>Total Rules</h3>
            <p className="stat-value">15</p>
          </div>
          <div className="stat-item">
            <h3>Success Rate</h3>
            <p className="stat-value">94%</p>
          </div>
        </div>
        
        <div className="rule-list">
          <h3>Automation Rules</h3>
          <div className="rule-table-placeholder">
            <p>Rules table will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rule;
