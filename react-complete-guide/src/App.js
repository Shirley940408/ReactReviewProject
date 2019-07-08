import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      {id:'ai', name: 'Max', age: 28},
      {id:'ai2', name: 'Manu', age: 29},
      {id:'ai23', name: 'Stephanie', age: 26},
    ],
    showPersons: false,
  }
  switchNameHandler = (newName, newAge) => {
    // console.log("clicked");
    this.setState(
      {
        persons: [
          { name: newName, age: newAge},
          { name: 'MM', age: 26},
          { name: 'Stephanie', age: 26},
        ]
      }
    )
  }

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
     persons: persons,
    })
  }

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({showPersons: !showPersons})
    console.log(this.state.showPersons);
  }
      
  deletePerson = (personIndex) => {
    const persons = this.state.persons;
    // copy value of original this.state.persons object to avoid directly change in the state object
    // other ways: const persons = [...this.state.persons]; const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
  render() {
    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border:'1pgx solid blue',
      padding:'8px',
      cursor:'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color:'black',
      }
    };
    let showPersons = null;
    const { persons } = this.state;

    if(this.state.showPersons){
      showPersons = (
        persons.map((val,index) => {    
          return (
            <Person 
            key = {val.id}
            name = {val.name} 
            age = {val.age}
            click = {() => {this.deletePerson(index)}}
            changed = {(e) => {this.nameChangedHandler(e, val.id)}}
            /> 
          )    
        })
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color:'black'
      }
    }

    return (
      <StyleRoot>
      <div className="App">
      <p>Hi, I'm a react app</p>
      <button style={style} onClick = {this.togglePersonsHandler}>Switch Name</button> 
       { 
        // this.state.showPersons == true?   
        showPersons
        // : null         
       }  
      </div> 
      </StyleRoot>  
    );
  }
}

export default Radium(App);
