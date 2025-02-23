import React, { useState } from 'react';
import { BarChart2, Heart, Users, Settings, LogOut } from 'lucide-react';
import './sidebar.css';

export function Sidebar() {
  const [activeButton, setActiveButton] = useState('dashboard');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">LOGO</div>
      <nav className="sidebar-nav">
        <button
          className={`sidebar-button ${activeButton === 'dashboard' ? 'sidebar-button-active' : ''}`}
          onClick={() => handleButtonClick('dashboard')}
        >
          <BarChart2 className="sidebar-icon" color="white"/>
        </button>
        <button
          className={`sidebar-button ${activeButton === 'heart' ? 'sidebar-button-active' : ''}`}
          onClick={() => handleButtonClick('heart')}
        >
          <Heart className="sidebar-icon"  color="white"/>
        </button>
        <button
          className={`sidebar-button ${activeButton === 'users' ? 'sidebar-button-active' : ''}`}
          onClick={() => handleButtonClick('users')}
        >
          <Users className="sidebar-icon"  color="white"/>
        </button>
        <button
          className={`sidebar-button ${activeButton === 'settings' ? 'sidebar-button-active' : ''}`}
          onClick={() => handleButtonClick('settings')}
        >
          <Settings className="sidebar-icon"  color="white"/>
        </button>
      </nav>
      <button className="sidebar-logout">
        <LogOut className="sidebar-icon"  color="white"/>
      </button>
    </div>
  );
}

export default Sidebar;
