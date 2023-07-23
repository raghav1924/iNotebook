import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import Addnotes from "./Addnotes";
import norecord from "../assets/norecord.png";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const navigate=useNavigate();

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const handleEditNote = (e) => {
    refClose.current.click();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    props.alert.showAlert("Note Edit Successful",'success')
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    console.log(note.edescription);
    console.log(note.edescription.length);
    console.log(note.etitle.length < 5 && note.edescription.length < 5)
    
  };

  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }else{
      navigate('/login');
    }
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    console.log(currentNote);
    ref.current.click();
     setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });

    // console.log(note);

  };


  const ref = useRef(null);
  const refClose = useRef(null);
  return (
    <div>
      <Addnotes showAlert={props.showAlert}/>

      <button
        type="button"
        className=" d-none btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="shadow p-3">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Note Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    onChange={onChange}
                    aria-describedby="emailHelp"
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Note Content
                  </label>
                  <textarea
                    rows={5}
                    type="text"
                    className="form-control"
                    id="edescription"
                    onChange={onChange}
                    value={note.edescription}
                    name="edescription"
                    minLength={5}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    onChange={onChange}
                    value={note.etag}
                    aria-describedby="emailHelp"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
                type="button"
                onClick={handleEditNote}
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row shadow-sm my-3">
        <h2>Your Notes</h2>
        {notes.length === 0 ? (
          <>
            <h5 className="text-center">No Note Found</h5>
            <img src={norecord} alt="No Records Found" srcSet="" />
          </>
        ) : (
          ""
        )}
        {notes.map((note) => {
          return (
            <NoteItem updateNote={updateNote} showAlert={props.showAlert} note={note} key={note._id} />
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
