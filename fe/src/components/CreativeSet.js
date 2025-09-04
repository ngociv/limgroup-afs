import React from 'react';

const CreativeSet = () => {
  return (
    <div className="creative-set-page">
      <div className="page-header">
        <h1>Creative Set Management</h1>
        <p>Manage your creative assets and ad sets</p>
      </div>
      
      <div className="creative-set-content">
        <div className="creative-stats">
          <div className="stat-item">
            <h3>Total Sets</h3>
            <p className="stat-value">89</p>
          </div>
          <div className="stat-item">
            <h3>Active Sets</h3>
            <p className="stat-value">56</p>
          </div>
          <div className="stat-item">
            <h3>Avg. Performance</h3>
            <p className="stat-value">4.1/5</p>
          </div>
        </div>
        
        <div className="creative-list">
          <h3>Creative Sets</h3>
          <div className="creative-grid-placeholder">
            <p>Creative sets grid will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeSet;
