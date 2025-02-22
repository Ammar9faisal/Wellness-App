import React, { useState } from 'react';
import ColorCoding from './ColorCoding';
import Chatbot from '../components/chatbot.jsx';

const Dashboard = () => {
    const [dashboardColor, setDashboardColor] = useState('white');

    const backgroundColors = {
        green: '#d4edda',
        orange: '#ffeeba',
        purple: '#e2d4f0',
        white: '#ffffff'
    };

    const backgroundColor = backgroundColors[dashboardColor] || backgroundColors.white;

    return (
        <div style={{ backgroundColor, minHeight: '100vh' }}>
            <ColorCoding setColor={setDashboardColor} />
            <h1>You are logged in</h1>
            <Chatbot />
        </div>
    );
};

export default Dashboard;
