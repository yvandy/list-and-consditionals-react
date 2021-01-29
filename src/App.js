
import './App.css';
import { Component } from 'react';
import Validation from './ValidationComponent/ValidationComponent';
import Char from './char/char';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  }

  deleteCharHandlier = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updateText = text.join('');
    this.setState({ userInput: updateText });

  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch}
        key={index}
        clicked={() => this.deleteCharHandlier(index)} />;
    })


    return (
      <div id="firstDiv">
        <hr />
        <span id="spanId" > ENTER THE TEXT </span>
        <br></br>
        <br></br>
        <input type="text" id="txtBox"
          onChange={this.inputChangeHandler}
          value={this.state.userInput} />
        <Validation inputLength={this.state.userInput.length} upperCase={this.state.userInput.toUpperCase()} />
        <hr />
        {charList}
      </div>
    )
  }
}

export default App;
