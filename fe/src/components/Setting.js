import React from 'react';

const Setting = () => {
  return (
    <div className="setting-page">
      <div className="page-header">
        <h1>Settings</h1>
        <p>Manage your account settings and preferences</p>
      </div>
      
      <div className="setting-content">
        <div className="setting-sections">
          <div className="setting-section">
            <h3>Account Settings</h3>
            <div className="setting-placeholder">
              <p>Account settings will be displayed here</p>
            </div>
          </div>
          
          <div className="setting-section">
            <h3>Notification Preferences</h3>
            <div className="setting-placeholder">
              <p>Notification settings will be displayed here</p>
            </div>
          </div>
          
          <div className="setting-section">
            <h3>Security Settings</h3>
            <div className="setting-placeholder">
              <p>Security settings will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
