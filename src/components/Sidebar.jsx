import React from 'react';
import { BarChart2, Heart, Users, Settings, LogOut } from 'lucide-react';
import './sidebar.css';

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">LOGO</div>
      <nav className="sidebar-nav">
        <button className="sidebar-button sidebar-button-active">
          <BarChart2 className="sidebar-icon" />
        </button>
        <button className="sidebar-button">
          <Heart className="sidebar-icon" />
        </button>
        <button className="sidebar-button">
          <Users className="sidebar-icon" />
        </button>
        <button className="sidebar-button">
          <Settings className="sidebar-icon" />
        </button>
      </nav>
      <button className="sidebar-logout">
        <LogOut className="sidebar-icon" />
      </button>
    </div>
  );
}
