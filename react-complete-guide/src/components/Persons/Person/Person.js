import React, { Component } from 'react';
// import Radium from 'radium';
import PropTypes from 'prop-types';
import styleModule from './Person.module.scss';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';
class Person extends Component {
  constructor(props){
    super(props)
    this.inputElementRef = React.createRef()
  }
  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  render(){
    return (
        <div>
          
          {
            this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
          }
          
          <p onClick = {this.props.click}>
            I'm a {this.props.name} and I am {this.props.age} years old! {this.props.children}
          </p>
          <input 
          type="text" 
          // ref = {(inputEl) => {this.inputElement = inputEl}}
          ref = {this.inputElementRef}
          onChange = {this.props.changed} 
          value = {this.props.name}/>
        </div>
    ); 
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
}

export default withClass(Person, styleModule.Person);