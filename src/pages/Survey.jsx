import backgroundImage from '../assets/Purple-Background.png'
import React, { useState } from 'react';
import './Survey.css';

const Survey = () => {
  //currentPage tracks which screen we’re on
  const [currentPage, setCurrentPage] = useState(0); // 0 for intro, 1-7 for questions
  const [responses, setResponses] = useState({});
//List of survey questions - with ID and text 
  const questions = [
    { id: 1, text: "How happy do you feel today? (1 = not happy at all, 10 = extremely happy)" },
    { id: 2, text: "How overwhelmed do you feel today? (1 = not at all, 10 = extremely overwhelmed)" },
    { id: 3, text: "How motivated do you feel to complete your daily tasks? (1 = no motivation, 10 = highly motivated)" },
    { id: 4, text: "How supported do you feel emotionally? (1 = not at all, 10 = very supported)" },
    { id: 5, text: "How much time have you spent on activities that bring you joy today? (1 = none, 10 = a lot)" },
    { id: 6, text: "How well do you feel you are managing stress today? (1 = not well at all, 10 = very well)" },
    { id: 7, text: "How hopeful do you feel about tomorrow? (1 = not hopeful, 10 = very hopeful)" },
  ];
//Next button
  const handleNext = (pageNum) => {

    //Popup after last page
    if (pageNum === 7) {
      alert('Survey completed! Thank you for your responses.');
      console.log('Survey Responses:', responses);
      return;
    }
    setCurrentPage(pageNum + 1);
  };
//Back button
  const handleBack = () => {
    setCurrentPage(currentPage - 1);
  };
//Record user answer
  const handleNumberClick = (value) => {
    setResponses({ ...responses, [currentPage]: value });
  };
//Progress bar shows current question
  const renderProgressBar = () => {
    return (
      <div className="progress-bar">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className={`dash ${index + 1 === currentPage ? 'active-dash' : ''}`}
          ></div>
        ))}
      </div>
    );
  };
//Renders the 1-10 scale with numbers and emojis for rating
  const renderScale = () => {
    return (
      <div className="scale-container">
        <div className="scale-numbers">
          {[...Array(10)].map((_, i) => (
            <div className="number-group" key={i}>
              <div
                className="number"
                style={{
                  backgroundColor: responses[currentPage] === i + 1 ? '#7b1fa2' : '#9c27b0',
                }}
                onClick={() => handleNumberClick(i + 1)}
              >
                {i + 1}
              </div>
            </div>
          ))}
        </div>
        <div className="scale-emojis">
          <div className="number-group"><span className="emoji">😔</span></div>
          <div className="number-group"></div>
          <div className="number-group"></div>
          <div className="number-group"></div>
          <div className="number-group"><span className="emoji">😐</span></div>
          <div className="number-group"></div>
          <div className="number-group"></div>
          <div className="number-group"></div>
          <div className="number-group"></div>
          <div className="number-group"><span className="emoji">😊</span></div>
        </div>
      </div>
    );
  };
//The main rendering logic - decides what to show based on currentPage
  return (
    <div className="body" style={{ backgroundImage: `url(${backgroundImage})` }}>
    
      {currentPage === 0 ? (
        <div className="container">
          <div className="header-bar">
            <div className="header-text">Check in with yourself!</div>
          </div>
          <div className="intro-text">
            Rate how you’re feeling on a scale of 1 to 10 and track your mental well-being over time.
          </div>
          <div className="emoji-scale">
            <div className="emoji-row">
              <span className="emoji">😄</span>
              <span className="emoji">😊</span>
              <span className="emoji">🙂</span>
              <span className="emoji">😐</span>
              <span className="emoji">😕</span>
              <span className="emoji">😣</span>
              <span className="emoji">😢</span>
              <span className="emoji">😭</span>
            </div>
            <div className="gradient-bar"></div>
          </div>
          <button className="next-button" onClick={() => handleNext(0)}>Next</button>
        </div>
      ) : (
        <div className="container">
          {renderProgressBar()}
          <div className="header-bar">
            <div className="header-text">Question {currentPage}</div>
          </div>
          <div className="question">{questions[currentPage - 1].text}</div>
          {renderScale()}
          <button className="next-button" onClick={() => handleNext(currentPage)}>
            {currentPage === 7 ? 'Finish' : 'Next'}
          </button>
          {currentPage > 1 && (
            <button className="back-button" onClick={handleBack}>Back</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Survey;