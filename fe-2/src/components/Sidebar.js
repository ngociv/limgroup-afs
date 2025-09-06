import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  MousePointer, 
  FileText, 
  Megaphone, 
  Bookmark, 
  Sliders, 
  Key, 
  Menu, 
  Square, 
  Image, 
  User, 
  Users, 
  Globe,
  ChevronDown,
  Moon,
  Sun
} from 'lucide-react';

const Sidebar = ({ activePage, setActivePage }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if dark theme is already applied or stored in localStorage
    return document.body.classList.contains('dark-theme') || 
           localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    // Apply initial theme
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: activePage === 'Dashboard' },
    { icon: MousePointer, label: 'Click', active: activePage === 'Click' },
    { icon: FileText, label: 'Landing Page', active: activePage === 'Landing Page' },
    { icon: Megaphone, label: 'Campaign', active: activePage === 'Campaign' },
    { icon: Bookmark, label: 'Ads', active: activePage === 'Ads' },
    { icon: Sliders, label: 'Rule', active: activePage === 'Rule' },
    { icon: Key, label: 'Keyword', active: activePage === 'Keyword', hasDropdown: true },
    { icon: Menu, label: 'Niche', active: activePage === 'Niche', hasDropdown: true },
    { icon: Square, label: 'Pixel', active: activePage === 'Pixel' },
    { icon: Image, label: 'Creative Set', active: activePage === 'Creative Set' },
    { icon: User, label: 'Ad Account', active: activePage === 'Ad Account' },
    { icon: User, label: 'Advertiser', active: activePage === 'Advertiser' },
    { icon: Users, label: 'Team', active: activePage === 'Team' },
    { icon: Globe, label: 'System', active: activePage === 'System', hasDropdown: true },
  ];

  const handleMenuClick = (label) => {
    setActivePage(label);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <img src={require('../assets/logo3.png')} alt="LimXAds Logo" />
        </div>
        <span className="logo-text">LimXAds</span>
      </div>
      <div className="sidebar-content">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className={`menu-item ${item.active ? 'active' : ''}`}
            onClick={() => handleMenuClick(item.label)}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
            {item.hasDropdown && <ChevronDown size={16} />}
          </div>
        ))}
        
        <div className="theme-switch">
          <div className="switch-container" onClick={toggleTheme}>
            <div className={`switch-option ${isDarkMode ? 'active' : ''}`}>
              <Moon size={16} />
            </div>
            <div className={`switch-option ${!isDarkMode ? 'active' : ''}`}>
              <Sun size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
