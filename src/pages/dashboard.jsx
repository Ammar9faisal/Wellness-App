import React from 'react';
import Chatbot from '../components/chatbot.jsx';
import ColorCoding from './ColorCoding.jsx';

const Dashboard = () => {
    return (
        <div>
            <ColorCoding/>
            <h1>You are logged in</h1>
            <Chatbot/>
        </div>
    );
};

export default Dashboard;
