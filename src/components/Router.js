import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "./Navigation";

const Router = ({isLoggedIn, userObj, refreshUserName}) => {

  return (
    <BrowserRouter>
      {isLoggedIn && <Navigation userObj={userObj}/>}
      <Routes>
        {isLoggedIn ? (
        <>
          <Route path="/" element={<Home userObj = {userObj}/>} />
          <Route path="/profile" element={<Profile userObj = {userObj} refreshUserName={refreshUserName}/>} />
        </>
        ) : (
        <Route path="/" element={<Auth/>} />
        )}
      </Routes>
    </BrowserRouter>
  )

}

export default Router;