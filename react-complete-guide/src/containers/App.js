import React, { Component } from 'react';
import styles from'./App.module.scss';
// import Radium, { StyleRoot } from 'radium';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';
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
    changeCounter: 0,
    authenticated: false,
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

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      }
    })
  }

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({showPersons: !showPersons})
    // console.log(this.state.showPersons);
  }
  loginHandler = () => {
    this.setState({authenticated: true});
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
          // isAuthenticated = {this.state.authenticated}
        />
      );
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color:'black'
      // }
    }
    return (
      <div>
        <button 
          onClick = {() => {
            this.setState({showCockpit: false})
          }}
        >
        Remove Cockpit
        </button>
        <AuthContext.Provider 
        value = {{
          authenticated: this.state.authenticated, 
          login: this.loginHandler}}>
        {
          this.state.showCockpit === true ?
            <Cockpit 
              title = {this.props.appTitle}
              showPersons = {this.state.showPersons}
              // persons = {this.state.persons}
              clicked = {this.togglePersonsHandler}
              login = {this.loginHandler}
            /> : null
        }
        { showPersons }
        </AuthContext.Provider>
      </div> 
    );
  }
}

export default withClass(App, styles.App);
