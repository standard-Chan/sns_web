import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "./Navigation";

const Router = ({isLoggedIn}) => {

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
        <>
          <Route path="/" element={<App/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
        </>
        ) : (
        <Route path="/" element={<Auth/>} />
        )}
      </Routes>
    </BrowserRouter>
  )

}

export default Router;