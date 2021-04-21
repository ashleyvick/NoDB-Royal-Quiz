import axios from "axios";
import React, { Component } from "react";
import Results from "./DisplayResults";
import DisplayResults from "./DisplayResults";
import Result from "./Result";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      index: 0,
      selectedOption: [],
      results: "",
    };
  }

  componentDidMount() {
    axios.get("/api/royals/quiz").then((response) => {
      console.log(response.data);
      this.setState({ data: response.data });
    });
  }

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleClick = (e) => {
    let body = {
      selectedAnswer: this.state.selectedOption,
    };
    axios.put("/api/royals/quiz", body).then((response) => {});

    this.setState({ index: this.state.index + 1 });
  };

  handleClick2 = () => {
    console.log("hit handleclick2");
    axios.get("/api/royals/results").then((response) => {
      this.setState({ results: response.data });
    });
  };

  reset = () => {
    axios.delete("/api/royals/quiz/:id").then((response) => {});
    this.setState({ index: 0 });
  };

  render() {
    const index = this.state.index;
    const { data } = this.state.data;
    const { selectedOption } = this.state;
    console.log(this.state.data);
    if (!data) return null;

    if (index >= 11) {
      return (
        <DisplayResults
          handleClick={this.handleClick2}
          results={this.state.results}
          reset={this.reset}
        />
      );
    }

    if (data[index].isImage === true) {
      return (
        <div className="photos-div">
          <h1 className="picture-questions">{data[index].question}</h1>
          <br></br>
          <p>
            <img className="photo-queen" src={data[index].choices[0]}></img>
            <input
              type="radio"
              name="answer"
              value={0}
              onChange={this.handleOptionChange}
            ></input>
          </p>
          ,
          <p>
            <img className="photos" src={data[index].choices[1]}></img>
            <input
              type="radio"
              name="answer"
              value={1}
              onChange={this.handleOptionChange}
            ></input>
          </p>
          ,
          <p>
            <img className="photos" src={data[index].choices[2]}></img>
            <input
              type="radio"
              name="answer"
              value={2}
              onChange={this.handleOptionChange}
            ></input>
          </p>
          ,
          <p>
            {" "}
            <img className="photos" src={data[index].choices[3]}></img>
            <input
              type="radio"
              name="answer"
              value={3}
              onChange={this.handleOptionChange}
            ></input>
          </p>
          <button className="submit-question" onClick={this.handleClick}>
            Submit
          </button>
        </div>
      );
    }

    return (
      <div>
        <div className="Questions-display">
          <h1 className="question">{data[index].question}</h1>
          <br></br>
          {/* OPTIONS */}
          <p>
            <input
              type="radio"
              name="answer"
              value={0}
              onChange={this.handleOptionChange}
            />{" "}
            {data[index].choices[0]}{" "}
          </p>

          <p>
            <input
              type="radio"
              name="answer"
              value={1}
              onChange={this.handleOptionChange}
            />{" "}
            {data[index].choices[1]}{" "}
          </p>

          <p>
            <input
              type="radio"
              name="answer"
              value={2}
              onChange={this.handleOptionChange}
            />{" "}
            {data[index].choices[2]}{" "}
          </p>

          <p>
            <input
              type="radio"
              name="answer"
              value={3}
              onChange={this.handleOptionChange}
            />{" "}
            {data[index].choices[3]}{" "}
          </p>
          <br></br>

          <button className="submit-question" onClick={this.handleClick}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default App;

//Save whatever selection they make into state.
// once click submit button - make the request to save it into the server as well as pass along whatever is in state.
