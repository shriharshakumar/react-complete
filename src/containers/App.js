import React, { Component } from 'react';
import classes from './App.css';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons'
import Person from '../components/Persons/Person/Person';
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass'

class App extends Component {

  constructor(props) {
    super(props);
    
    console.log("[App.js] Inside constructor");
    this.state = {
      persons: [
        { id: '1', name: 'Div', age: 28 },
        { id: '2', name: 'Hars', age: 29 },
        { id: '3', name: 'ABCD', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  componentWillMount(){
    console.log("[App.js] Inside componentWillMount")
  }

  componentDidMount() {
    console.log("[App.js] Inside componentWillMount")
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Hars', age: 29 },
        { name: 'ABCD', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons : persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log("[App.js] Inside render")
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}/>
        </div>
      );

    } 

    return (
      <WithClass classes={classes.App}>
        <Cockpit 
          title={this.props.title}
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}
        />
        {persons}
      </WithClass> 
    );
    
  }
}

export default App;
