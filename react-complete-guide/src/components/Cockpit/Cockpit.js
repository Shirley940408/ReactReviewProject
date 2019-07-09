import React from 'react';
import styles from'./Cockpit.module.scss';
const cockpit = (props) => {
  let btnClass = styles.button;
  if(props.showPersons){
    btnClass = styles.buttonClicked;
  }
  return (
    <div>
    <p>Hi, I'm a react app</p>
    <button className={btnClass} onClick = {props.clicked}>Switch Name</button> 
    </div>
  );
}
export default cockpit;