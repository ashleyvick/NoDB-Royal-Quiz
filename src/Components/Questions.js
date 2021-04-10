import axios from 'axios';
import React, {Component} from 'react';

class App extends Component { 
    constructor (){
        super();
        this.state = {
            data: [],
            index: 0,
        };
    }

    componentDidMount(){
        axios
        .get('/api/royals/quiz')
        .then((response) => {
            console.log(response.data)
            this.setState( { data: response.data })
        })
    }

    handleClick = () => {
        this.setState({index: this.state.index+1})
        
        axios.put('/api/royals/quiz')
        .then((response) => {
            this.setState({ data: response.data})
        })
        
    }

    render(){
        const {data} = this.state.data
        console.log(this.state.data)
        if (!data)
        return (null)

        return(
            <div>
                <h1>Question</h1>
                <div className = "Questions-display">
                    <h1 className="question">{data[0].question}</h1>
                    <p><input type="radio" name= "answer" /> {data[0].choices[0]} </p>
                    <p><input type="radio" name= "answer" /> {data[0].choices[1]} </p>
                    <p><input type="radio" name= "answer" /> {data[0].choices[2]} </p>
                    <p><input type="radio" name= "answer" /> {data[0].choices[3]} </p>                 
                </div>
                <button className="submit-question" onClick= {this.handleClick} >Submit</button>

                
            </div>
        )
    }
}

export default App;

//Save whatever selection they make into state.
// once click submit button - make the request to save it into the server as well as pass along whatever is in state. 

