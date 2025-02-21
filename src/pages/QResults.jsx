import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QResults.css';
import background from '../assets/Purple.png';

function QResults() {
    const navigate = useNavigate();

    return (
        <div className="results-page">
            <img src={background} alt="background" className="background" />
            <div className="results-container">
                <h1>Results</h1>
                <p>Your quiz is complete! Thank you for participating.</p>
                <p>You can redo the quiz or head back to your dashboard.</p>
                
                <div className="results-buttons">
                    <button className="redo-button" onClick={() => navigate('/question1')}>
                        Redo Quiz
                    </button>
                    
                    <button className="dashboard-button" onClick={() => navigate('/dashboard')}>
                        Head to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
}

export default QResults;
