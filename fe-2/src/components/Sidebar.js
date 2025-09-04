import React from 'react';
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
  Moon,
  Sun,
  ChevronDown
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: false },
    { icon: MousePointer, label: 'Click', active: true },
    { icon: FileText, label: 'Landing Page', active: false },
    { icon: Megaphone, label: 'Campaign', active: false },
    { icon: Bookmark, label: 'Ads', active: false },
    { icon: Sliders, label: 'Rule', active: false },
    { icon: Key, label: 'Keyword', active: false, hasDropdown: true },
    { icon: Menu, label: 'Niche', active: false, hasDropdown: true },
    { icon: Square, label: 'Pixel', active: false },
    { icon: Image, label: 'Creative Set', active: false },
    { icon: User, label: 'Ad Account', active: false },
    { icon: User, label: 'Advertiser', active: false },
    { icon: Users, label: 'Team', active: false },
    { icon: Globe, label: 'System', active: false, hasDropdown: true },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <span>L</span>
          <span>X</span>
        </div>
        <span className="logo-text">LimXAds</span>
      </div>
      <div className="sidebar-content">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className={`menu-item ${item.active ? 'active' : ''}`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
            {item.hasDropdown && <ChevronDown size={16} />}
          </div>
        ))}
        
        <div className="theme-toggle">
          <Moon size={20} />
          <Sun size={20} className="active" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
