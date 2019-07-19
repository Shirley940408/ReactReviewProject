import React, { Component } from 'react';
import Person from './Person/Person';
class Persons extends Component {
  // componentWillUnmount(){
  //   console.log('Persons.js will unmount')
  //   //The lifecycle that you use to effect something before the component unmount.
  // }
  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate')
    if(
      nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
      ){
      return true
    } else {
      return false
    }
  }
  render(){
    console.log('[Persons.js] rendering...');   
    return(
      this.props.persons.map((val,index) => {   
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
    ) 
  }
}
  export default Persons;