import { signInWithPopup,  GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

const Auth = () => {
  const [error, setError] = useState("");

  const onGoogleClick = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        setError("에러 : " + errorCode);
      });
  }

  const onGitClick = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      setError("에러 : " + errorCode);
    });
  }

  return (
    <>
      <h1> SNS </h1>
      <form>
        <input type='email' name='email' placeholder='email'/>
        <input type='password' name='password' placeholder='password'/>
        <input type='submit' value={"log in"}/>
      </form>
      <button onClick={onGoogleClick}>continue to google</button>
      <button onClick={onGitClick}>continue to gitHub</button>
      <p>{error}</p>
    </>
  );
}

export default Auth;