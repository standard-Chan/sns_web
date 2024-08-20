import {auth} from "../firebase";
import {signOut, updateProfile} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({userObj, refreshUserName}) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const OnLogOutClick = () => {
    signOut(auth);
    navigate("/");
  }

  const nameOnChange = (event) => {
    setName(event.target.value);
  }

  const onNameSubmit = async (event) => {
    event.preventDefault();
    if (name !== "") {
      console.log(event.target.inputName.value);
      userObj.displayName = name;
      await updateProfile(auth.currentUser, {
        displayName: event.target.inputName.value
      });
      refreshUserName();
      
      setName("");
      event.target.inputName.value = "";
    }
    else {
      console.log("이름을 입력하세요");
    }
  }

  return (
  <>
    <h1>Profile</h1>
    <div>
      <form onSubmit={onNameSubmit}>
        <input type="text" name="inputName" onChange={nameOnChange}/>
        <input type="submit" value={"닉네임 변경"}/>
      </form>
    </div>
    <div>
      <button onClick={OnLogOutClick}>log out</button>
    </div>
  </>
  );
}

export default Profile;