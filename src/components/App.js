import { useState, useEffect } from 'react';
import Auth from '../routes/Auth';
import './App.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase";
import Home from '../routes/Home';
import Router from './Router';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(Object);

  const checkLoggedIn = async () => {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        console.log("log IN !!");
        setUserObj({
          uid : auth.currentUser.uid,
          displayName : auth.currentUser.displayName,
        })
      } else {
        console.log("log out state!!")
        setIsLoggedIn(false);
      }
    });
  }
  
  const refreshUserName = async () => {
    await onAuthStateChanged(auth, (user) => {
        setIsLoggedIn(true);
        console.log("log IN !!");
        setUserObj({
          uid : auth.currentUser.uid,
          displayName : auth.currentUser.displayName,
        });
      });
  }


  useEffect(() => {
    checkLoggedIn();
    setInit(true);
    console.log("APP : ", userObj);
  }, []);

  return (
    <div className="App">
      {init ? (<Router isLoggedIn={isLoggedIn} userObj={userObj} refreshUserName={refreshUserName}/>) : "initializing..."}
    </div>
  );
}

export default App;
