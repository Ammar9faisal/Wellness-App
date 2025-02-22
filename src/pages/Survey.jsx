// Import the background image we'll use for the page - this lives in src/assets
import backgroundImage from '../assets/Purple.png';
// Grab React and the useState hook for managing our component's state
import React, { useState } from 'react';
// Pull in our CSS file to style everything up
import './Survey.css';

import { useNavigate } from 'react-router-dom'; //navigation to another page


// Here's our main Survey component - think of it as the whole happiness survey experience
const Survey = () => {
  // currentPage tracks which screen we’re on: 0 is the intro, 1-7 are questions
  const [currentPage, setCurrentPage] = useState(0);
  // responses stores the user’s answers as an object, like {1: 5, 2: 3}
  const [responses, setResponses] = useState({});

  const navigate = useNavigate();

  // This is our list of survey questions - each has an ID and text to display
  const questions = [
    { id: 1, text: "How happy do you feel today? (1 = not happy at all, 10 = extremely happy)" },
    { id: 2, text: "How overwhelmed do you feel today? (1 = not at all, 10 = extremely overwhelmed)" },
    { id: 3, text: "How motivated do you feel to complete your daily tasks? (1 = no motivation, 10 = highly motivated)" },
    { id: 4, text: "How supported do you feel emotionally? (1 = not at all, 10 = very supported)" },
    { id: 5, text: "How much time have you spent on activities that bring you joy today? (1 = none, 10 = a lot)" },
    { id: 6, text: "How well do you feel you are managing stress today? (1 = not well at all, 10 = very well)" },
    { id: 7, text: "How hopeful do you feel about tomorrow? (1 = not hopeful, 10 = very hopeful)" },
  ];

  // Handles clicking the "Next" button - moves to the next page or finishes the survey
  const handleNext = (pageNum) => {
    // If we’re on the last question (page 7), show a thank-you popup and log responses
    if (pageNum === 7) {
      alert('Survey completed! Thank you for your responses.');
      console.log('Survey Responses:', responses); // Handy for debugging or saving data later
      navigate("/dashboard");
      return;
    }
    // Otherwise, just bump up to the next page
    setCurrentPage(pageNum + 1);
  };

  // Moves us back one page when the "Back" button is clicked
  const handleBack = () => {
    setCurrentPage(currentPage - 1);
  };

  // Records the user’s rating (1-10) when they click a number
  const handleNumberClick = (value) => {
    // Spread the old responses and add the new one for the current page
    setResponses({ ...responses, [currentPage]: value });
  };

  // Renders the progress bar at the top - shows which question we’re on
  const renderProgressBar = () => {
    return (
      <div className="progress-bar">
        {/* Create 7 dashes, one for each question */}
        {[...Array(7)].map((_, index) => (
          // Highlight the dash for the current page with 'active-dash'
          <div
            key={index}
            className={`dash ${index + 1 === currentPage ? 'active-dash' : ''}`}
          ></div>
        ))}
      </div>
    );
  };

  // Renders the 1-10 scale with numbers and emojis for rating
  const renderScale = () => {
    return (
      <div className="scale-container">
        <div className="scale-numbers">
          {/* Loop to create 10 clickable number buttons */}
          {[...Array(10)].map((_, i) => (
            <div className="number-group" key={i}>
              <div
                className="number"
                // Highlight the selected number by changing its background color
                style={{
                  backgroundColor: responses[currentPage] === i + 1 ? '#7b1fa2' : '#9c27b0',
                }}
                onClick={() => handleNumberClick(i + 1)} // Save the rating when clicked
              >
                {i + 1} {/* Display numbers 1-10 */}
              </div>
            </div>
          ))}
        </div>
        {/* Emojis below the scale to give a visual cue */}
        <div className="scale-emojis">
          <div className="number-group"><span className="emoji">😔</span></div> {/* Sad at 1 */}
          <div className="number-group"></div>
          <div className="number-group"></div>
          <div className="number-group"></div>
          <div className="number-group"><span className="emoji">😐</span></div> {/* Neutral at 5 */}
          <div className="number-group"></div>
          <div className="number-group"></div>
          <div className="number-group"></div>
          <div className="number-group"></div>
          <div className="number-group"><span className="emoji">😊</span></div> {/* Happy at 10 */}
        </div>
      </div>
    );
  };



  // The main rendering logic - decides what to show based on currentPage
  return (
    // Set the background image for the whole survey using our imported image
    <div className="body" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Intro page (currentPage === 0) */}
      {currentPage === 0 ? (
        <div className="container">
          <div className="header-bar">
            <div className="header-text">Check in with yourself!</div> {/* Big welcoming title */}
          </div>
          <div className="intro-text">
            Rate how you’re feeling on a scale of 1 to 10 and track your mental well-being over time.
          </div>
          {/* Show some emojis and a gradient bar to set the mood */}
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
            <div className="gradient-bar"></div> {/* Fancy color gradient */}
          </div>
          <button className="next-button" onClick={() => handleNext(0)}>Next</button> {/* Start the survey */}
        </div>
      ) : (
        // Question pages (currentPage 1-7)
        <div className="container">
          {renderProgressBar()} {/* Show progress at the top */}
          <div className="header-bar">
            <div className="header-text">Question {currentPage}</div> {/* Display current question number */}
          </div>
          <div className="question">{questions[currentPage - 1].text}</div> {/* Show the question text */}
          {renderScale()} {/* Show the rating scale */}
          {/* Next button changes to "Finish" on the last page */}
          <button className="next-button" onClick={() => handleNext(currentPage)}>
            {currentPage === 7 ? 'Finish' : 'Next'}
          </button>
          {/* Back button appears starting from page 2 */}
          {currentPage > 1 && (
            <button className="back-button" onClick={handleBack}>Back</button>
          )}
        </div>
      )}
    </div>
  );
};

// Export the Survey component so we can use it in App.jsx
export default Survey;