import axios from "axios";
import React from "react";

const Results = ({}) => {

    handleClick = (e) => {

        axios.get('/api/royals/quiz', results)
        .then((response) => {
        });
    }


    retakeQuiz = (e) => {
        axios.delete('/api/royals/quiz')
        .then((response) => {

        });
    }





    return (
        <div>
            <button onClick={handleClick}>Get Results</button>

        <button onClick={retakeQuiz}>Try Again</button>


        </div>
    )
}

export default Results;