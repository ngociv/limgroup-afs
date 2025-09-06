import React from 'react';
import { Search, Download, Filter, Settings } from 'lucide-react';

const Pixel = () => {
  const dateFilters = [
    'Today', 'Yesterday', 'Last 7 Days', 'This Month', 
    'Last Month', 'This Quarter', 'All Time', 'Custom'
  ];

  return (
    <div className="main-content">
      <div className="content-header">
        <div className="date-filters">
          {dateFilters.map((filter, index) => (
            <button 
              key={index} 
              className={`date-filter ${filter === 'Today' ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="header-actions">
          <button className="filter-btn">
            <Filter size={16} />
            Filter
          </button>
          <button className="settings-btn">
            <Settings size={16} />
          </button>
        </div>
      </div>
      
      <div className="content-card">
        <div className="card-header">
          <div className="card-title">
            <h2>0 Pixels</h2>
          </div>
          
          <div className="search-section">
            <div className="search-bar">
              <Search size={16} />
              <input 
                type="text" 
                placeholder="Search pixels"
                className="search-input"
              />
            </div>
          </div>
          
          <div className="download-btn">
            <Download size={20} />
          </div>
        </div>
        
        <div className="card-content">
          <div className="no-data">
            <h3>No pixels found</h3>
            <p>Create your first pixel to track conversions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pixel;
