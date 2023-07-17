import React from "react";
import noteIMG from "../assets/notesIMG.jpg"

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3 my-2">
      <div className="card" style={{ width: "18rem" }}>
        <img src={noteIMG} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <code>{note._id}</code>
          <p className="card-text">{note.description}</p>
          {/* <a href="#" className="btn btn-primary">Edit</a> */}
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
