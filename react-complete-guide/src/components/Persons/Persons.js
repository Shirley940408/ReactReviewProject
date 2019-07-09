import React from 'react';
import Person from './Person/Person';
const persons = (props) => props.persons.map((val,index) => {    
    return (
      <Person 
      key = {val.id}
      name = {val.name} 
      age = {val.age}
      click = {() => {props.clicked(index)}}
      changed = {(e) => {props.changed(e, val.id)}}
      /> 
    )    
  })
  export default persons;