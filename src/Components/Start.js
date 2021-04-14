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
        const {name} = this.state
        console.log(this.state, name)

        axios.post('/api/royals/quiz', {name})
        .then ((response) => {
            this.setState({name: response.data})
        })
    }

    


    render(){
        return(
            <div>
                <div className = "title-box">
                <h1>Which Duchess From The Royal Family Are You? 
                <br></br>
                <input className="nameInput" placeholder="Your Name" name = "name" onChange={this.handleInput}></input>

                <button className = "nameButton" onClick ={this.handleClick} >Click</button>
                </h1>
                </div>
            </div>
        )
    }
}

export default Start;
