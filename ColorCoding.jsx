import React, { useState } from "react";

//whatever is the file name for questions
//import Questionnaire from "./Questionnaire";

//whatever is teh file nam efgor the dahsboard
//import Dashboard from "./Dashboard";

const App = () => {
  const [dashboardColor, setDashboardColor] = useState("white");

  const handleComplete = (answers) => {
    const count = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach((answer) => {
      if (answer) count[answer]++;
    });

    const maxChoice = Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b));

    switch (maxChoice) {
      case "A":
        setDashboardColor("green");
        break;
      case "B":
        setDashboardColor("orange");
        break;
      case "C":
        setDashboardColor("purple");
        break;
      default:
        setDashboardColor("white");
    }
  };

  return (
    <div>
      <Questionnaire onComplete={handleComplete} />
      <Dashboard color={dashboardColor} />
    </div>
  );
};

export default App;
