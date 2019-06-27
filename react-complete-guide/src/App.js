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
  switchNameHandler = () => {
    // console.log("clicked");
    this.setState(
      {
        persons: [
          { name: 'Max', age: 28},
          { name: 'MM', age: 26},
          { name: 'Stephanie', age: 26},
        ]
      }
    )
  }
  render() {
    const { persons } = this.state;
    return (
      <div className="App">
      <p>Hi, I'm a react app</p>
      <button onClick = {this.switchNameHandler}>Switch Name</button>
      {
        // for(i = 0; i < persons.length; i++){
        //   return <Person name={persons[i].name} age={person[i].age}/>
        // }
        // you cannot write for loop in JSX like above. The effective way to use loop is using map:

        persons.map((value) => {
          return <Person key={value.name} name={value.name} age={value.age}/>
        })
      }     
      </div>   
    );
  }
}

export default App;
