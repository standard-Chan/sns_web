import {auth} from "../firebase";
import {signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const OnLogOutClick = () => {
    signOut(auth);
    navigate("/");
  }

  return (
  <>
    <h3>Profile</h3>
    <div>
      <button onClick={OnLogOutClick}>log out</button>
    </div>
  </>
  );
}

export default Profile;