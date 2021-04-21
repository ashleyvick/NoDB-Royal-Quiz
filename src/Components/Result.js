import axios from "axios";
import React from "react";
import Questions from "./Questions";

const Result = (props) => {
  return (
    <div className="results">
      <h1>{props.results}</h1>
    </div>
  );
};

export default Result;
