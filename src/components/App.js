import { useState, useEffect } from 'react';
import Auth from '../routes/Auth';
import './App.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase";
import Home from '../routes/Home';
import Router from './Router';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log(auth);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setIsLoggedIn(true);
        console.log("log IN !!");
      } else {
        console.log("log out state!!")
        setIsLoggedIn(false);
      }
    });
  });

  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
