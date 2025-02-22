import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QResults from './QResults.jsx';

const ColorCoding = () => {
    const navigate = useNavigate();
    const [dashboardColor, setDashboardColor] = useState('white');

    useEffect(() => {
        const finalCategory = localStorage.getItem('finalCategory') || 'D';

        // Set dashboard color based on final category
        switch (finalCategory) {
            case 'A':
                setDashboardColor('green');
                break;
            case 'B':
                setDashboardColor('purple');
                break;
            case 'C':
                setDashboardColor('orange');
                break;
            default:
                setDashboardColor('white');
        }
    }, []);

    return (
        <div className="dashboard" style={{ backgroundColor: dashboardColor }}>
            <h1>Welcome to your Dashboard</h1>
            <button onClick={() => navigate('/results')}>Go Back to Results</button>
        </div>
    );
};

export default ColorCoding;
