import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26},
    ]
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
  render() {
    const { persons } = this.state;
    return (
      <div className="App">
      <p>Hi, I'm a react app</p>
      <button onClick = {() => this.switchNameHandler('Amy', 27)}>Switch Name</button>
      {
        // for(i = 0; i < persons.length; i++){
        //   return <Person name={persons[i].name} age={person[i].age}/>
        // }
        // you cannot write for loop in JSX like above. The effective way to use loop is using map:

        persons.map((val,index) => {
          return (<Person 
                  key = {index}
                  name = {val.name} 
                  age = {val.age}
                  click = {this.switchNameHandler.bind(this,'Sara', 25)}
                  changed = {this.nameChangedHandler}
                  />)
        })
      } 
      </div>   
    );
  }
}

export default App;
