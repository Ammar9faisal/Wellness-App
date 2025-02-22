import React from 'react';
import ColorCoding from './ColorCoding';
import Chatbot from '../components/chatbot.jsx';

const Dashboard = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <ColorCoding />
            <h1>You are logged in</h1>
            <Chatbot />
        </div>
    );
};

export default Dashboard;
