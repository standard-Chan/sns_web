import { useState } from "react";
import { storage } from "../firebase";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";


const Post = ({userObj}) => {
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState(Object);
  const [imageUrl, setImageUrl] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const postRef = collection(db, "post", );

    // image upload
    const uuid = uuidv4();
    const storageRef = ref(storage, `${userObj.uid}/${uuid}`);
    await uploadBytes(storageRef, imageFile);

    const imageUrl = await getDownloadURL(ref(storage, `${userObj.uid}/${uuid}`));

    // text upload
    var today = new Date();
    const data = "" + today.getFullYear() + "0" + (today.getMonth() + 1) + "0" + today.getDate() + today.getSeconds();
    await addDoc(postRef, {
      createdBy : userObj.displayName,
      uid : userObj.uid,
      comment : text,
      createdAt : data,
      imageUrl
    })

    // clean up
    event.target.text.value = "";
    event.target.image.value = "";
    setText("");
    setImageFile(Object);
    setImageUrl("");
  }

  const onTextChange = (event) => {
    setText(event.target.value);
  }

  const onFileChange = (event) => {
    if (event.target.files[0] !== undefined) {
      setImageFile(event.target.files[0]);
      setImageUrl(URL.createObjectURL(event.target.files[0]));
    }
    else {
      setImageFile(Object);
      setImageUrl("");
    }

    if (imageUrl !== "") {

    }
  }


  return (
    <>
      {imageUrl !== "" && <img src={imageUrl} alt="not" height={"50px"}/>}
      <form onSubmit={onSubmit}>
        <input type="text" name="text" onChange={onTextChange}/>
        <input type="file" name="image" onChange={onFileChange} accept="image/*"/>
        <input type="submit" value={"post"}/>
      </form>
    </>
  );
}

export default Post;