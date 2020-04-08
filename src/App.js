import React, { Component } from 'react';
import './App.css';
import KeyPads from './Component/KeyPads';
import Display from './Component/Display';
import { keys } from './utilities/Veriables';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: ''
    }
  }
  handleClick = (pressedKey) => {
    try {
      if (pressedKey === '=') {
        this.calculate();
      }
      else if (pressedKey === 'AC') {
        this.setState({
          display: ''
        })
      }
      else if (pressedKey === 'C') {
        this.setState({
          display: this.state.display.slice(0, -1)
        })
      }
      else {
        this.setState({
          display: this.state.display + pressedKey
        });
      }
    }
    catch (error) {
      this.setState({
        display: ''
      });
      console.log("Error: " + error)
    }
  }
  calculate = () => {
    this.setState({
      display: eval(this.state.display)
    })
  }
  render() {
    return (
      <div className="Calculator container col">
        <div className="row">
          <Display
            text={this.state.display}
          />
        </div>
        <div className="row">
          {keys.map((currentValue, index, keysArr) => (
            <KeyPads
              key={keysArr[index].id}
              id={keysArr[index].id}
              value={keysArr[index].value}
              display={this.state.display}
              handleClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
