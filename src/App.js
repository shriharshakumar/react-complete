import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Abc", age: "28" }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Harsha </p>
        <Person name="Hars" age="7" />
        <button> Click here bitch! </button>
        <div>This is {this.state.persons[0].name} and is {this.state.persons[0].age} years </div>
      </div>
    );
    
    //React.createElement('div', { className: 'App' }, React.createElement('h1', { className: 'App' }, 'Hi, I\'m a React App'))
  }
}

export default App;
