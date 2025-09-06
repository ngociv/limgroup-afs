import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

const Header = ({ activePage }) => {
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="page-title">{activePage}</h1>
      </div>
      
      <div className="header-right">
        <div className="dropdown">
          <span>All advertisers</span>
          <ChevronDown size={16} />
        </div>
        
        <div className="dropdown">
          <span>All teams</span>
          <ChevronDown size={16} />
        </div>
        
        <div className="dropdown">
          <span>UTC-7 (America/Los_Angeles)</span>
          <ChevronDown size={16} />
        </div>
        
        <div className="notification-icon">
          <Bell size={20} />
        </div>
        
        <div className="user-profile">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" 
            alt="User" 
            className="profile-picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
