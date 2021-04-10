// make the input field
// type into field it updates state
//when click button THEN makes the axios request. .post this.state.name and pass in body of request.

import axios from 'axios';
import React, {Component} from 'react';

class Start extends Component { 
    constructor (){
        super();
        this.state = {
            name: ''
        };
    }

    handleInput = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        const name = this.state;

        axios.post('/api/royals/quiz', {name})
        .then ((response) => {
            this.name(response.data)
        })
        .catch()
    }

    


    render(){
        return(
            <div>
                <div className = "display-box">
                <h1>What Duchess from the Royal Family Are You? </h1>
                <input className="nameInput" placeholder="Your Name" onChange={this.handleInput}></input>
                <button className = "nameButton" onClick ={this.handleClick} >Click</button>
                </div>
            </div>
        )
    }
}

export default Start;
