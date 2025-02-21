import React, { useState } from 'react';
import './Question.css';
import background from '../assets/Purple.png';

function Question() {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    
    const answers = [
        { id: 'A', text: 'What are some of the issues you face in your day to day life?' },
        { id: 'B', text: 'What are some of the issues you face in your day to day life?' },
        { id: 'C', text: 'What are some of the issues you face in your day to day life?' },
        { id: 'D', text: 'What are some of the issues you face in your day to day life?' }
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
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className={`dash ${i === 0 ? 'active' : ''}`}></div>
                        ))}
                    </div>
                </div>
                
                <h1>Question 1</h1>
                <p>What are some of the issues you face in your day to day life?</p>
                
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

export default Question;