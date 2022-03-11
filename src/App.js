import { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component { 
  state = {
    quotes: [],
  };

  componentDidMount(){
    this.getQuotesData();
  }

  getQuotesData = () => {
    axios
    .get(`${process.env.REACT_APP_API_URL}/quotes`)
    .then((response) => {
        this.setState({
          quotes: response.data.advice,
        })

  })
    .catch((err) =>{
      console.log('getting error')
    });
  };

  render() {
    return(
      <div>

      <div>
      <p> {this.state.quotes}</p>
      </div>

      <div>
        <button type='button' onClick={this.getQuotesData}>
          Another
        </button>
      </div>
    </div>   
      
    );
  };
  
};


export default App;
