import React from "react";
import noteIMG from "../assets/noteIMG.png"

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3 my-3">
      <div className="card" style={{ width: "18rem" }}>
        <i class="fa-solid fa-circle-xmark fa-2xl" style={{position:"absolute",right:"-10px"}}></i>
        <img src={noteIMG} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <code>{note._id}</code>
          <p className="card-text">{note.description}</p>
          <div className="d-flex justify-content-end">

          {/* <i class="fa-solid fa-trash-can mx-2"></i> */}
          <i class="fa-regular fa-pen-to-square fa-xl m-2"></i>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
