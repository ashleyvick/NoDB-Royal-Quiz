import axios from "axios";
import React from "react";

const Results = () => {
  const handleClick = (e) => {
    axios.get("/api/royals/quiz").then((response) => {
      this({ winner: response.data });
    });
  };

  const getResults = () => {
    {
      this.answer.map(() => {
        return;
      });
    }
  };

  const retakeQuiz = () => {
    axios.delete("/api/royals/quiz").then((response) => {});
  };

  return (
    <div>
      {/* <section>
            <button onClick={handleClick, getResults}>Get Results</button>
            </section>

            <button onClick={retakeQuiz}>Try Again</button> */}
    </div>
  );
};

export default Results;
