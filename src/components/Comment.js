import { deleteDoc, doc } from "firebase/firestore";
import {db} from "../firebase";
import { useEffect } from "react";

const Comment = ({commentObj}) => {
  const onDeleteClick = async () => {
    if (window.confirm("삭제 하시겠습니까?")){
      await deleteDoc(doc(db, "comment", commentObj.docId));
    }
  }


  const onEditClick = () => {
    console.log("edit?");
  }

  return (
    <div>
      <div>{commentObj.createdBy} {commentObj.createdAt}</div>
      <h3>{commentObj.comment}</h3>
      <button onClick={onDeleteClick}>delete</button>
      <button onClick={onEditClick}>edit</button>
    </div>
  );
}

export default Comment;