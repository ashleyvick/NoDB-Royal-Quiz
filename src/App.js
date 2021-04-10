import React, {Component} from 'react';
// import axios from 'axios';
import Start from './Components/Start';
import Questions from './Components/Questions';
// import Results from './Components/Results';
// import DisplayResults from './Components/DisplayResults'

class App extends Component {
  constructor(){
    super();
    this.state = {
      // quiz: quiz,
      // index: 1
    };
  }




  

  render(){
    return (
      <div>
        <h1>Royal Quiz</h1>
        <Start />
        <Questions/>

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