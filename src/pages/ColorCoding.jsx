import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QResults from './QResults.jsx';

const ColorCoding = ({ setColor }) => {
    const navigate = useNavigate();
    const [dashboardColor, setDashboardColor] = useState('white');

    useEffect(() => {
        const finalCategory = localStorage.getItem('finalCategory') || 'D';

        let color = 'white';
        switch (finalCategory) {
            case 'A':
                color = 'green';
                break;
            case 'B':
                color = 'purple';
                break;
            case 'C':
                color = 'orange';
                break;
            default:
                color = 'white';
        }

        setDashboardColor(color);
        setColor(color); // <-- Pass the color up to Dashboard
    }, [setColor]);

    return (
        <div className="dashboard" style={{ backgroundColor: dashboardColor }}>
            <h1>Welcome to your Dashboard</h1>
            <button onClick={() => navigate('/results')}>Go Back to Results</button>
        </div>
    );
};


export default ColorCoding;
