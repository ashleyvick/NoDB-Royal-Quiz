import axios from "axios";
import React from "react";
import Questions from "./Questions";

const Results = (props) => {
  console.log(props);

  return (
    <div>
      <section>
        <button className="getResults" onClick={props.handleClick}>
          Get Results
        </button>
        {props.results ? ( //this is saying do not DISPLAY the result div until it's called.
          <div className="results">
            <h1>{props.results}</h1>
          </div>
        ) : null}
      </section>

      <button className="retake" onClick={props.reset}>
        Try Again
      </button>
    </div>
  );
};

export default Results;
