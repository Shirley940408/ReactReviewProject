import React from 'react';
import Radium from 'radium';
import './Person.css';
const person = (props) => {
  const styles = {
    '@media(min-width: 500px)': {
      width: '450px'
    }
  };
  return (
    <div className = 'Person' style={styles}>
      <p onClick = {props.click}>I'm a {props.name} and I am {props.age} years old! {props.children}
      </p>
      <input type="text" onChange = {props.changed} value = {props.name}/>
    </div>
  ); 
}

export default Radium(person);