import { useEffect, useState } from "react";
import Comment from "../components/Comment";
import CommentFactory from "../components/CommentFactory";
import { collection, getDocs, doc, onSnapshot, query, orderBy } from "firebase/firestore";
import {db} from "../firebase";
import Post from "../components/Post";
import Posting from "../components/Posting";


const Home = ({userObj}) => {
  const [postsObj, setPostsObj] = useState(null);

  const getComment = async () => {
    const q = query(collection(db, "post"), orderBy("createdAt", "desc"));
    onSnapshot(q, (querySnapshot) => {
      const newArray = [];
      querySnapshot.forEach((doc) => {
        newArray.push({id : doc.id, ...doc.data()});
      });
      setPostsObj(newArray);
    });
  }

  useEffect(()=> {
    getComment();
  }, []);

  return (
    <>
      <h1>Main</h1>
      <Post userObj={userObj}/>
      <CommentFactory userObj={userObj}/>
      <div>
        {postsObj ? 
        postsObj.map((post, index) => <Posting key={index} postingObj={post}/>) : <h3>Loading...</h3>}
      </div>
    </>
  );
}

export default Home;