import React, { useContext } from "react";
import noteIMG from "../assets/noteIMG.png"
import noteContext from "../context/notes/noteContext";


const NoteItem = (props) => {
  const context=useContext(noteContext);
  const {deleteNote}=context;
  const { note,updateNote } = props;

  return (
    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-5  my-3">
      <div className="card" style={{ maxWidth: "18rem" ,height:'auto'}}>
        <i className="fa-solid fa-circle-xmark fa-2xl" onClick={()=>{deleteNote(note._id);props.showAlert("Note Deleted Successful",'success')}} style={{position:"absolute",right:"-10px"}}></i>
        <img src={noteIMG} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <code>{note.tag}</code>
          <p className="card-text">{note.description}</p>
          <div className="d-flex justify-content-end">

          {/* <i class="fa-solid fa-trash-can mx-2"></i> */}
          <i className="fa-regular fa-pen-to-square fa-xl m-2" onClick={()=>{updateNote(note)}}></i>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
