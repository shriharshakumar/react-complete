import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Cockpit.css';

const cockpit =(props) => {

    const assignedClasses = []
    let btnClass = classes.Button;
    
    if(props.showPersons){
        btnClass = [classes.Button, classes.Red].join(" ");
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return(
        <Aux>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Welcome ! </p>
            <button
                class={btnClass}
                onClick={props.clicked}>
                Toggle Persons
            </button>
            <h6> Toggle Click Count: {props.toggleClicked} </h6>
        </Aux>
    );
}

export default cockpit;