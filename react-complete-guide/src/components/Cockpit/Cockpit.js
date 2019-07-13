import React, { useEffect } from 'react';
import styles from'./Cockpit.module.scss';
const Cockpit = (props) => {
  useEffect(() => {
    // must inside a function
    console.log('[Cockpit.js] useEfect')
    // faked http request...
    setTimeout(() => {
      alert('Saved data to cloud!')
    }, 1000)
  }, [props.persons]);
  
  let btnClass = styles.button;
  if(props.showPersons){
    btnClass = styles.buttonClicked;
  }
  return (
    <div>
    <p>{props.title}</p>
    <button className={btnClass} onClick = {props.clicked}>Switch Name</button> 
    </div>
  );
}
export default Cockpit;