import React, { useState } from 'react';
import { BarChart2, Smile, Users, Settings, LogOut } from 'lucide-react';
import './sidebar.css';

export function Sidebar() {
  const [activeButton, setActiveButton] = useState('dashboard');  // 'dashboard' is the default active button

  const handleButtonClick = (buttonName) => {  // sets the button as active when a button is clicekd
    setActiveButton(buttonName);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">Logo</div>
      <nav className="sidebar-nav">
        <button
          className={`sidebar-button ${activeButton === 'dashboard' ? 'sidebar-button-active' : ''}`}
          onClick={() => handleButtonClick('dashboard')}  // sets the button as active when a button is clicekd
        >
          <BarChart2 className="sidebar-icon" color="white"/>
        </button>
        <button
          className={`sidebar-button ${activeButton === 'heart' ? 'sidebar-button-active' : ''}`}
          onClick={() => handleButtonClick('heart')}  // sets the button as active when a button is clicekd
        >
          <Smile className="sidebar-icon"  color="white"/>
        </button>
        <button
          className={`sidebar-button ${activeButton === 'users' ? 'sidebar-button-active' : ''}`}
          onClick={() => handleButtonClick('users')} // sets the button as active when a button is clicekd
        >
          <Users className="sidebar-icon"  color="white"/>
        </button>
        <button
          className={`sidebar-button ${activeButton === 'settings' ? 'sidebar-button-active' : ''}`}
          onClick={() => handleButtonClick('settings')}   // sets the button as active when a button is clicekd
        >
          <Settings className="sidebar-icon"  color="white"/>
        </button>
      </nav>
      <button className="sidebar-button">
        <LogOut className="sidebar-icon"  color="white"/>
      </button>
    </div>
  );
}

export default Sidebar;
