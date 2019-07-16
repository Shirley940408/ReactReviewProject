import React, { Component } from 'react';
import styles from'./App.module.scss';
// import Radium, { StyleRoot } from 'radium';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';

// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      {id:'ai', name: 'Max', age: 28},
      {id:'ai2', name: 'Manu', age: 29},
      {id:'ai23', name: 'Stephanie', age: 26},
    ],
    showPersons: false,
    showCockpit: true,
  }
  // static getDerivedStateFromProps(props, state){
  //   console.log('[App.js] getDrivedStateFromProps', props);
  //   return state;
  // }
  componentWillMount(){
    //rarely used, it will be removed in the future
    console.log('[App.js] componentWillMount')
  }
  componentDidMount(){
    console.log('[App.js] componentDidMount');
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
    // console.log(this.state.showPersons);
  }
      
  deletePerson = (personIndex) => {
    const persons = this.state.persons;
    // copy value of original this.state.persons object to avoid directly change in the state object
    // other ways: const persons = [...this.state.persons]; const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
  render() {
    console.log('[App.js] render')
    console.log(this.state.showCockpit)
    // const style = {
    //   backgroundColor : 'white',
    //   font: 'inherit',
    //   border:'1pgx solid blue',
    //   padding:'8px',
    //   cursor:'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color:'black',
    //   }
    // };
    let showPersons = null;
    const { persons } = this.state;
    let btnClass = styles.button;
    if(this.state.showPersons){
      showPersons = (
        <Persons
          persons = {this.state.persons}
          clicked = {this.deletePerson}
          changed = {this.nameChangedHandler}
        />
      );
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color:'black'
      // }
    }

    return (
      <WithClass classes={styles.App}>
      <button 
        onClick = {() => {
          this.setState({showCockpit: false})
        }}
      >
        Remove Cockpit
      </button>
        {
          this.state.showCockpit == true ?
            <Cockpit 
            title = {this.props.appTitle}
            showPersons = {this.state.showPersons}
            // persons = {this.state.persons}
            clicked = {this.togglePersonsHandler}
            /> : null
        }
        { 
          // this.state.showPersons == true?   
          showPersons
          // : null         
        }  
      </WithClass> 
    );
  }
}

export default App;
