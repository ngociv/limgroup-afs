import React, { useState } from 'react';
import '../styles/AdAccount.css';

const AdAccount = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data for ad accounts
  const adAccounts = [
    {
      id: 3650,
      name: "Mst Mfir",
      accountId: "1263645534917622",
      advertiser: {
        name: "Ngọc Nguyễn Văn",
        email: "ngocarb9999@gmail.com",
        avatar: "👤"
      },
      startDate: "19 Aug, 2025 11:30AM",
      status: false
    },
    {
      id: 3649,
      name: "0812 02 US NGOC PLF",
      accountId: "1025813188432770",
      advertiser: {
        name: "Ngọc Nguyễn Văn",
        email: "ngocarb9999@gmail.com",
        avatar: "👤"
      },
      startDate: "18 Aug, 2025 11:30AM",
      status: true
    },
    {
      id: 3648,
      name: "0812 08 US NGOC PLF",
      accountId: "311383131348681",
      advertiser: {
        name: "Ngọc Nguyễn Văn",
        email: "ngocarb9999@gmail.com",
        avatar: "👤"
      },
      startDate: "18 Aug, 2025 17:00PM",
      status: true
    },
    {
      id: 3647,
      name: "0812 09 US NGOC PLF",
      accountId: "277792214956817",
      advertiser: {
        name: "Ngọc Nguyễn Văn",
        email: "ngocarb9999@gmail.com",
        avatar: "👤"
      },
      startDate: "18 Aug, 2025 17:00PM",
      status: true
    },
    {
      id: 3646,
      name: "0812 05 US NGOC PLF",
      accountId: "658447629542845",
      advertiser: {
        name: "Ngọc Nguyễn Văn",
        email: "ngocarb9999@gmail.com",
        avatar: "👤"
      },
      startDate: "18 Aug, 2025 17:00PM",
      status: true
    }
  ];

  const filteredAccounts = adAccounts.filter(account =>
    account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    account.accountId.includes(searchTerm)
  );

  const toggleStatus = (id) => {
    // In a real app, this would update the backend
    console.log(`Toggling status for account ${id}`);
  };

  return (
    <div className="ad-account-page">
      {/* Top Header Bar */}
      <div className="top-header-bar">
        <div className="header-left">
          <h1>Ad Account</h1>
        </div>
        <div className="header-right">
          <div className="header-dropdowns">
            <select className="header-dropdown">
              <option>All advertisers</option>
            </select>
            <select className="header-dropdown">
              <option>All teams</option>
            </select>
            <select className="header-dropdown">
              <option>UTC-7 (America/Los_Angeles)</option>
            </select>
          </div>
          <div className="header-actions">
            <button className="header-icon-btn">
              <span>🔔</span>
            </button>
            <button className="header-icon-btn">
              <span>❓</span>
            </button>
            <button className="header-avatar-btn">
              <span>👤</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ad-account-content">
        {/* Content Header */}
        <div className="content-header">
          <div className="content-header-left">
            <h2>{filteredAccounts.length} Ad Accounts</h2>
          </div>
          <div className="content-header-right">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search by name or account ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>
            <button className="action-btn">
              <span>🔧</span>
              <span>Filter</span>
            </button>
            <button className="action-btn">
              <span>🔄</span>
            </button>
            <button className="action-btn">
              <span>⚙️</span>
            </button>
            <button className="action-btn">
              <span>⬇️</span>
            </button>
          </div>
        </div>

        {/* Ad Accounts Table */}
        <div className="accounts-table-container">
          <table className="accounts-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Ad account</th>
                <th>Advertiser</th>
                <th>Start crawling from</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredAccounts.map((account) => (
                <tr key={account.id}>
                  <td>{account.id}</td>
                  <td className="account-info">
                    <div className="account-details">
                      <span className="facebook-icon">📘</span>
                      <div className="account-text">
                        <div className="account-name">{account.name}</div>
                        <div className="account-id">{account.accountId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="advertiser-info">
                    <div className="advertiser-details">
                      <span className="advertiser-avatar">{account.advertiser.avatar}</span>
                      <div className="advertiser-text">
                        <div className="advertiser-name">{account.advertiser.name}</div>
                        <div className="advertiser-email">{account.advertiser.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{account.startDate}</td>
                  <td className="account-actions">
                    <button 
                      className={`status-toggle ${account.status ? 'active' : ''}`}
                      onClick={() => toggleStatus(account.id)}
                    >
                      <span className="toggle-slider"></span>
                    </button>
                    <button className="edit-btn">
                      <span>✏️</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdAccount;
