import React from "react";
import GoalComponent from "../GoalComponent";
import "./index.css";

const TrelloBoard = () => {
  return (
    <div className="mainGoalDiv">
      <div style={{ width: "100vw", maxWidth: "500px" }}>
        <div className="goalHeading">Plan your savings!</div>
        <GoalComponent />
      </div>
    </div>
  );
};

export default TrelloBoard;
