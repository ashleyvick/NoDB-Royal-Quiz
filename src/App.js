import React, {Component} from 'react';
import './App.css'
// import axios from 'axios';
import Start from './Components/Start';
import Questions from './Components/Questions';
import DisplayResults from './Components/DisplayResults'

class App extends Component {
  constructor(){
    super();
    this.state = {
    };
  }




  

  render(){
    return (
      <div className= "App-header">
        <header className= "royal-quiz">Royal Quiz</header>
        <div className = "Components">
          <Start />
          <Questions/>
        </div>
        <footer className = "dedication">Dedicated to the memory of His Royal Highness, Prince Philip, Duke of Edinburgh
          <br></br>
          June 10, 1921 - April 09, 2021</footer>

      </div>
    )
  }
}

export default App

//  axios
// .post('/api/royals')
// .then ((response) => {
//   this.setState({name: response.data})
// })
// .catch();
// }