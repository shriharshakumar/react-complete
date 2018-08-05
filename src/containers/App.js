import React, { Component } from 'react';
import classes from './App.css';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Person from '../components/Persons/Person/Person';
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Auxiliary';
import PropTypes from 'prop-types';

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
      showPersons: false,
      toggleClicked: 0
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
    this.setState((prevState, props) => { 
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
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
      <Aux>
        <Cockpit 
          title={this.props.title}
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}
          toggleClicked = {this.state.toggleClicked}
        />
        {persons}
      </Aux>
    );
    
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func 
}

export default withClass(App, classes.App);
