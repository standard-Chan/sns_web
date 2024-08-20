import { useEffect, useState } from "react";
import Comment from "../components/Comment";
import CommentFactory from "../components/CommentFactory";
import { collection, getDocs, doc, onSnapshot, query, orderBy } from "firebase/firestore";
import {db} from "../firebase";


const Home = ({userObj}) => {
  const [commentsObj, setCommentsObj] = useState(null);

  const getComment = async () => {
    /*  실시간 갱신 안되는 코드
    const querySnapshot = await getDocs(collection(db, "comment"));
    const comments = [];
    querySnapshot.forEach((doc) => {
        const obj = {
          docId : doc.id,
          uid : doc.data().uid,
          name : doc.data().createdBy,
          comment : doc.data().comment,
          createdAt : doc.data().createdAt,
        }
      comments.push(obj);
      });
    
    console.log("Home: ", comments);
    setCommentsObj(comments);
    */
    const q = query(collection(db, "comment"), orderBy("createdAt", "desc"));
    onSnapshot(q, (querySnapshot) => {
      const newArray = [];
      querySnapshot.forEach((doc) => {
        newArray.push({id : doc.id, ...doc.data()});
      });
      setCommentsObj(newArray);
    });
    
  }

  useEffect(()=> {
    getComment();
  }, []);

  return (
    <>
      <h1>Main</h1>
      <CommentFactory userObj={userObj}/>
      <div>
        {commentsObj ? 
        commentsObj.map((comment, index) => <Comment key={index} commentObj={comment}/>) : <h3>Loading...</h3>}
      </div>
    </>
  );
}

export default Home;