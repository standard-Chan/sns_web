import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";


const CommentFactory = ({userObj}) => {
  const [text, setText] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const ref = collection(db, "comment", );

    var today = new Date();
    const data = "" + today.getFullYear() + "0" + (today.getMonth() + 1) + "0" + today.getDate();
    await addDoc(ref, {
      createdBy : userObj.displayName,
      uid : userObj.uid,
      comment : text,
      createdAt : data,
    })
    event.target.text.value = "";
    setText("");
  }

  const onTextChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="text" onChange={onTextChange}/>
        <input type="submit"/>
      </form>
    </>
  );
}

export default CommentFactory;