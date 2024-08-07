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

  const checkLoggedIn = async () => {
    console.log(auth);
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setIsLoggedIn(true);
        console.log("log IN !!");
      } else {
        console.log("log out state!!")
        setIsLoggedIn(false);
      }
    });
  }

  useEffect(() => {
    checkLoggedIn();
    setInit(true);
  });

  return (
    <div className="App">
      {init ? (<Router isLoggedIn={isLoggedIn}/>) : "initializing..."}
    </div>
  );
}

export default App;
