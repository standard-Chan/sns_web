import { deleteDoc, doc } from "firebase/firestore";
import {db} from "../firebase";


const Posting = ({postingObj}) => {
  const onDeleteClick = async () => {
    if (window.confirm("삭제 하시겠습니까?")){
      await deleteDoc(doc(db, "comment", postingObj.docId));
    }
  }

  const onEditClick = () => {
    console.log("edit?");
  }

  return (
    <div>
      <div>{postingObj.createdBy} {postingObj.createdAt}</div>
      <h3>{postingObj.comment}</h3>
      <img src={postingObj.imageUrl} alt={"not"} width={"200px"}/>
      <button onClick={onDeleteClick}>delete</button>
      <button onClick={onEditClick}>edit</button>
    </div>
  );
}

export default Posting;