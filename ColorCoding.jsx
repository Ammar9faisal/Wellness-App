//sample code - not been tested - just to give an idea

import React, { useState } from "react";

// whatever the questionnaire file would be
// import Questionnaire from "./Questionnaire";

//whatever the dashboard file would be
// import Dashboard from "./Dashboard";

const App = () => {
  const [answers, setAnswers] = useState(Array(10).fill(null));

  const handleAnswer = (index, option) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  // Function to determine the dominant answer
  const getDashboardColor = () => {
    const count = { A: 0, B: 0, C: 0, D: 0 };

    answers.forEach((answer) => {
      if (answer) count[answer]++;
    });

    const maxChoice = Object.keys(count).reduce((a, b) =>
      count[a] > count[b] ? a : b
    );

    // Return the corresponding color
    switch (maxChoice) {
      case "A":
        return "green";
      case "B":
        return "orange";
      case "C":
        return "purple";
      default:
        return "white";
    }
  };

  return (
    <div>
      <Questionnaire answers={answers} onAnswer={handleAnswer} />
      <Dashboard color={getDashboardColor()} />
    </div>
  );
};

export default App;
