import { Component } from "react";
import axios from "axios";
import "./app.scss";
import dice from "./images/dice.svg";

class App extends Component {
  state = {
    quotes: [],
  };

  componentDidMount() {
    this.getQuotesData();
  }

  getQuotesData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/quotes`)
      .then((response) => {
        this.setState({
          quotes: response.data.advice,
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Error trying to fetch the API");
      });
  };

  render() {
    return (
      <div className="box">
        <div className="box__quote">
          <div className="box__quote-text">
            <p> {this.state.quotes}</p>
          </div>
        </div>
        <button
          className="box__button"
          type="button"
          onClick={this.getQuotesData}
        >
          <img className="box__button-img" src={dice} alt="dice img"></img>
        </button>
      </div>
    );
  }
}

export default App;
