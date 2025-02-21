import React, { useState } from 'react';
import './Question.css';
import background from '../assets/Purple.png';

function Question3() {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    
    const answers = [
        { id: 'A', text: 'I overthink and feel tense, even about minor issues.' },
        { id: 'B', text: 'I turn to substances or behaviors (e.g., alcohol, smoking, gaming, etc.).' },
        { id: 'C', text: 'I withdraw from people and lose interest in activities.' },
        { id: 'D', text: 'I\'m not sure' }
    ];

    const handleSelect = (id) => {
        setSelectedAnswer(id);
    };

    return (
        <div className="question-page">
            <img src={background} alt='background' className='background' />
            <div className="question-container">
                <div className="progress-bar">
                    <div className="progress"></div>
                    <div className="dashes">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className={`dash ${i === 0 ? 'active' : ''}`}></div>
                        ))}
                    </div>
                </div>
                
                <h1>Question 2</h1>
                <p>How do you usually handle stress?</p>
                
                <div className="answer-options">
                    {answers.map((answer) => (
                        <button 
                            key={answer.id} 
                            className={`answer-button ${selectedAnswer === answer.id ? 'selected' : ''}`} 
                            onClick={() => handleSelect(answer.id)}
                        >
                            {answer.id}. {answer.text}
                        </button>
                    ))}
                </div>
                
                <button className="next-button">Next</button>
            </div>
        </div>
    );
}

export default Question3;