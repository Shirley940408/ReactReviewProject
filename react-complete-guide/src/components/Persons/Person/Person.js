import React, { Component } from 'react';
// import Radium from 'radium';
import PropTypes from 'prop-types';
import styleModule from './Person.module.scss';
import withClass from '../../../hoc/withClass';
class Person extends Component {
  render(){ 
    return (
      <div>
        <p onClick = {this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old! {this.props.children}
        </p>
        <input type="text" onChange = {this.props.changed} value = {this.props.name}/>
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