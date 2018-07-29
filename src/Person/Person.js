import React from 'react';

const person = (props) => {
return ( 

    <div>
        I'm {props.name} My age is {props.age} years ! 
        <input type="text" onChange={props.changed} />    
    </div>  
    

)
    
}

export default person;