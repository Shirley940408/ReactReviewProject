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
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, [props.persons]);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect')
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    }
  })
  
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