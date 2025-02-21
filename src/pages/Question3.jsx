import React, { useState } from 'react';
import './Question.css';
import background from '../assets/Purple.png';

function Question3() {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    
    const answers = [
        { id: 'A', text: 'I get nervous or self-conscious in social settings.' },
        { id: 'B', text: 'I often avoid people because I feel judged about my habits.' },
        { id: 'C', text: 'I feel indifferent or too exhausted to engage with others.' },
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
                            <div key={i} className={`dash ${i === 2 ? 'active' : ''}`}></div>
                        ))}
                    </div>
                </div>
                
                <h1>Question 3</h1>
                <p> How do you feel about social interactions?</p>
                
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