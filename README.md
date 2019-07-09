# ReactReview using an application

## Geting started

### Two kinds of applications
- #### single page Applications
   - #### Only one Html page, Content is (re)rendered on Client
  >more popular these days, for it allow you manage the entire page with JavaScript and never have to go back to the server to reload the pages -- better user experience because everything happens instantly; Even if the user needs to wait, you are showing a spinner or you are still presenting a reactive web app
- #### Multi page Applications
   - #### Multiple Html pages, Content is rendered on Server
  >the individual widget does not knows other components' exist. The user always need to wait the server response for it is rendered on server.
  ## ES6 syntax review
### Copy value vs Copy reference
###### For primary data, it always copy value.
```Js
let a = 1
let b = a
a = 5
console.log(a)//a->5
console.log(b)//b->1
```
###### For the Object, it always copy reference. To avoid copy the reference, use a spread operator.
```Js
const person = {
  name: 'Max',
}

const secondPerson = person
person.name = 'Menu'
console.log(secondPerson)//{name: Menu}

const thirdPerson = {...person}
person.name = 'Sara'
console.log(thirdPerson)//{name: Menu}
//it is still named Menu, for using spread will copy the value, not reference.
```
### Arrow Function
###### Arrow function normally could make your code more delicate and concise.
```Js
const printMyName = name => "My name is "+ name
console.log(printMyName("Shura"))
// When you only need to return one line, then you can delete 'return' and the { }
// It also work when you just need a console.log() in your function
// const printMyName = name => console.log("My name is "+ name); printMyname("Shura"); the result is the same
```
###### Some of method that could be used
```Js
const numbers = [1,2,3]
const doubleNumArray = numbers.map(num => {return num*2})
//which equals to
//const doubleNumArray = numbers.map(num => num*2)
console.log(doubleNumArray)
```
## How to start an react app
- downlode the node.js from its websites.
- Mac install npm: `sudo npm install create-react-app -g`, 必须有sudo, 否则会有permission denied.
- create-react-app the <-itsName->
- cd to the address, then `npm start`
## JSX restriction
wrap all element in a single element 
```JSX
class App extends Component {
  render() {
    return (
      <div className="App"> //one <></> wraped.
      <p> Hi, I'm a react app </p>
      </div>   
    );
  }
}
```
## Components
`import React, {Component} from 'react';`
- For each component, the name needed to be writen using lower case.
- Both the document name and the name that imported in other document need to be capitalized.
```JSX
import React from 'react';
const person = () => {
  return <p>I'm a person!</p>
}
export default person;
``` 
```jsx
import Person from './Person/Person';
```
## dynamic props
### When you need js function in a JSX, using `{}` inside it.
```JSX
import React from 'react';
const person = (props) => {
  return <p>I'm a {props.name} and I am {props.age} years old! {props.children}</p>
}

export default person;
```
## dynamic parameters
```JSX

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
    console.log("clicked");
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
```
#### 什么情况可以使用for循环： for loop 在最外层， 即不能使用某个标签里面套for循环再套标签。
### this.setState() and props change are the only two options those could lead react update the DOM.
```JSX
switchNameHandler = () => {
    // function could work e.g. after onClicked
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
```

### Use function components as much as possible, use Class components only when it must have a state.

### The way that children components would like to change the parent components.
```JSX
// First, put the reference of method into the props of chirdren
// second write the call function in the childern components

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

        persons.map((value) => {
          return <Person 
                  key={value.name} 
                  name={value.name} 
                  age={value.age}
                  click = {this.switchNameHandler.bind(this,'Sara', 25)}
                  />
        })
      }     
      </div>   
    );
```
### Two ways that parameters could be passed.
- ##### call back function
```JSX
<button onClick = {() => this.switchNameHandler('Amy', 27)}>Switch Name</button>
```
- ##### function.bind(this, parameter1, parameter2,...)
```JSX
persons.map((value) => {
  return <Person 
          key={value.name} 
          name={value.name} 
          age={value.age}
          click = {this.switchNameHandler.bind(this,'Sara', 25)}
          />
})
```
### Resopnsable Layout
#### When using in .css files
```css
@media(min-width: 500px){
  .Person{
    width: 450px;
  }
}
```
#### using in .js files
```jsx
//using in components
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

//using these components above by wraping <StyleRoot></StyleRoot> in App.js

import Radium, { Styleroot } from 'radium';
//...
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
```

### How to add a Sass Stylesheet -- A simple way to avoid naming problem
[Adding a Sass Stylesheet · Create React App](https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet)
### Error Control
#### You can use another component to handle this, then import it to App return stage as a higher rank component. But only do this when you know there is a step could cause errors those cannot avoid. Otherwise it will catch all the errors in the develop process.
```JSX
  import React, {Component} from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMessage: error});
  }
  
  render(){
    if (this.state.hasError){
      return <h1>{this.state.errorMessage}</h1>
    }else{
      return this.props.children;
    }
  }
}

export default ErrorBoundary;

//App.js
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
//...

    return (
      <ErrorBoundary>
      <div className={styles.App}>
      <p>Hi, I'm a react app</p>
      <button className={btnClass} onClick = {this.togglePersonsHandler}>Switch Name</button> 
       { 
        // this.state.showPersons == true?   
        showPersons
        // : null         
       }  
      </div> 
      </ErrorBoundary>
    );
```