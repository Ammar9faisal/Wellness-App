  // This is our list of survey questions - each has an ID and text to display
export const questions = [
    { id: 1, text: "How happy do you feel today? (1 = not happy at all, 10 = extremely happy)" },
    { id: 2, text: "How overwhelmed do you feel today? (1 = not at all, 10 = extremely overwhelmed)" },
    { id: 3, text: "How motivated do you feel to complete your daily tasks? (1 = no motivation, 10 = highly motivated)" },
    { id: 4, text: "How supported do you feel emotionally? (1 = not at all, 10 = very supported)" },
    { id: 5, text: "How much time have you spent on activities that bring you joy today? (1 = none, 10 = a lot)" },
    { id: 6, text: "How well do you feel you are managing stress today? (1 = not well at all, 10 = very well)" },
    { id: 7, text: "How hopeful do you feel about tomorrow? (1 = not hopeful, 10 = very hopeful)" },
];

// Handles clicking the "Next" button - moves to the next page or finishes the survey
export const handleNext = (pageNum, responses, setResponses, setCurrentPage, navigate) => {
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
export const handleBack = (currentPage, setCurrentPage) => {
    setCurrentPage(currentPage - 1);
};

// Records the user’s rating (1-10) when they click a number
export const handleNumberClick = (value, currentPage, responses, setResponses) => {
    // Spread the old responses and add the new one for the current page
    setResponses({ ...responses, [currentPage]: value });
};