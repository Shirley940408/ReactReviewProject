import React, { Component } from 'react';
import Person from './Person/Person';
class Persons extends Component {
  render(){
    console.log('[Persons.js] rendering...');   
    return this.props.persons.map((val,index) => {   
      return (
        <Person 
        key = {val.id}
        name = {val.name} 
        age = {val.age}
        click = {() => {this.props.clicked(index)}}
        changed = {(e) => {this.props.changed(e, val.id)}}
        /> 
      )    
    })
  }
}
  export default Persons;