import React, { Component,Fragment } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26},
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
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 27},
        { name: event.target.value, age: 26},
        { name: 'Stephanie', age: 26},
      ]
    })
  }
  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({showPersons: !showPersons})
    console.log(this.state.showPersons);
  }
  render() {
    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border:'1pgx solid blue',
      padding:'8px',
      cursor:'pointer',
    };
    const { persons } = this.state;
    return (
      <div className="App">
      <p>Hi, I'm a react app</p>
      <button style={style} onClick = {this.togglePersonsHandler}>Switch Name</button> 
      { this.state.showPersons == true?   
        persons.map((val,index) => {    
        return (
          <Person 
          key = {index}
          name = {val.name} 
          age = {val.age}
          click = {this.switchNameHandler.bind(this,'Sara', 25)}
          changed = {this.nameChangedHandler}
          /> 
        )    
        }): null         
      }  
      </div>   
    );
  }
}

export default App;
