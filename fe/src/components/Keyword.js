import React from 'react';

const Keyword = () => {
  return (
    <div className="keyword-page">
      <div className="page-header">
        <h1>Keyword Management</h1>
        <p>Manage and optimize your keywords</p>
      </div>
      
      <div className="keyword-content">
        <div className="keyword-stats">
          <div className="stat-item">
            <h3>Total Keywords</h3>
            <p className="stat-value">2,456</p>
          </div>
          <div className="stat-item">
            <h3>Active Keywords</h3>
            <p className="stat-value">1,234</p>
          </div>
          <div className="stat-item">
            <h3>Avg. CPC</h3>
            <p className="stat-value">$1.25</p>
          </div>
        </div>
        
        <div className="keyword-list">
          <h3>Keyword Performance</h3>
          <div className="keyword-table-placeholder">
            <p>Keyword table will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyword;
