import React, { useState } from 'react';
import './Question.css';
import background from '../assets/Purple.png';

function Question4() {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    
    const answers = [
        { id: 'A', text: 'I have trouble falling asleep because my mind won’t stop racing.' },
        { id: 'B', text: 'My sleep is irregular due to certain habits or substances.' },
        { id: 'C', text: 'I sleep too much or too little and still feel exhausted.' },
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
                            <div key={i} className={`dash ${i === 3 ? 'active' : ''}`}></div>
                        ))}
                    </div>
                </div>
                
                <h1>Question 4</h1>
                <p>How do you sleep at night?</p>
                
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

export default Question4;