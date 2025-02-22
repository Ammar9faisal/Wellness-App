import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ColorCoding = ({ setColor }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const finalCategory = localStorage.getItem('finalCategory') || 'D';

        let color = 'white';
        switch (finalCategory) {
            case 'A':
                color = 'green';
                break;
            case 'B':
                color = 'orange';
                break;
            case 'C':
                color = 'purple';
                break;
            default:
                color = 'white';
        }

        setColor(color); // Pass color up to Dashboard
    }, [setColor]);

    return (
        <div>
            <h1>Welcome to your Dashboard</h1>
            <button onClick={() => navigate('/results')}>Go Back to Results</button>
        </div>
    );
};

export default ColorCoding;
