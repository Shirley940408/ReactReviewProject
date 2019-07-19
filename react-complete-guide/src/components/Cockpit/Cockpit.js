import React, { useEffect, useRef } from 'react';
import styles from'./Cockpit.module.scss';
import AuthContext from '../../context/auth-context';
const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    // must inside a function
    console.log('[Cockpit.js] useEfect')
    // // faked http request...
    // setTimeout(() => {
    //   alert('Saved data to cloud!')
    // }, 1000)
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, []);

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
      <button ref = {toggleBtnRef} className={btnClass} onClick = {props.clicked}>Switch Name</button>
      <AuthContext.Consumer>
        {(context) => <button onClick = {context.login}>log in</button>}
      </AuthContext.Consumer>
    </div>
  );
}
export default React.memo(Cockpit); 