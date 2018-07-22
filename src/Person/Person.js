import React from 'react';

const person = (props) => {
return ( 

    <div>
        My name is {props.name} I'm {props.age} years old ! 
        <input type="text" onChange={props.changed} />    
    </div>  
    

)
    
}

export default person;