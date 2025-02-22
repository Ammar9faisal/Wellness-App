import React from 'react';
import ColorCoding from './ColorCoding';
import Chatbot from '../components/chatbot.jsx';

const Dashboard = ({ color = 'white' }) => {
    const backgroundColors = {
        green: '#d4edda',
        orange: '#ffeeba',
        purple: '#e2d4f0',
        white: '#ffffff'
    };

    const backgroundColor = backgroundColors[color] || backgroundColors.white;

    return (
        <div style={{ backgroundColor, minHeight: '100vh' }}>
            <ColorCoding />
            <h1>You are logged in</h1>
            <Chatbot />
        </div>
    );
};

export default Dashboard;
