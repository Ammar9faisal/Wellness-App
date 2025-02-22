import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ColorCoding = ({ setColor }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const finalCategory = localStorage.getItem('finalCategory') || 'D';

        const colorMap = {
            A: 'green',
            B: 'orange',
            C: 'purple',
            D: 'white'
        };

        const color = colorMap[finalCategory] || 'white';
        setColor(color);
    }, [setColor]);

    return (
        <div>
            <h1>Welcome to your Dashboard</h1>
            <button onClick={() => navigate('/results')}>Go Back to Results</button>
        </div>
    );
};

export default ColorCoding;
