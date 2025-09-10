import React from 'react';
import { Filter, Settings } from 'lucide-react';
import RevenueCostProfitChart from './RevenueCostProfitChart';
import TopNichesChart from './TopNichesChart';
import RPCOverTimeChart from './RPCOverTimeChart';

const Dashboard = () => {
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

      <div className="dashboard-metrics">
        <div className="metric-card">
          <div className="metric-title">Revenue</div>
          <div className="metric-value">$5,285.96</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">Cost</div>
          <div className="metric-value">$4,067.44</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">Profit</div>
          <div className="metric-value positive">$1,218.52</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">ROI</div>
          <div className="metric-value positive">29.96%</div>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="content-card">
          <div className="card-header">
            <div className="card-title"><h2>Revenue, Cost, Profit</h2></div>
            <div className="date-filters">
              <button className="date-filter active">Hourly</button>
              <button className="date-filter">Daily</button>
              <button className="date-filter">Weekly</button>
              <button className="date-filter">Monthly</button>
              <button className="date-filter">Yearly</button>
            </div>
          </div>
          <div className="card-content">
            <RevenueCostProfitChart />
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <div className="card-title"><h2>Top Niches</h2></div>
          </div>
          <div className="card-content">
            <TopNichesChart />
          </div>
        </div>
      </div>

      <div className="dashboard-metrics bottom">
        <div className="metric-card">
          <div className="metric-title">RPC</div>
          <div className="metric-value positive">$2.71</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">Clicks</div>
          <div className="metric-value">1879</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">CTR</div>
          <div className="metric-value">62.21%</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">Impressions</div>
          <div className="metric-value">3,132</div>
        </div>
      </div>

      <div className="content-card">
        <div className="card-header">
          <div className="card-title"><h2>RPC Over Time</h2></div>
          <div className="date-filters">
            <button className="date-filter">Hourly</button>
            <button className="date-filter active">Daily</button>
            <button className="date-filter">Weekly</button>
            <button className="date-filter">Monthly</button>
            <button className="date-filter">Yearly</button>
          </div>
        </div>
        <div className="card-content">
          <RPCOverTimeChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


