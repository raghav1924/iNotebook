import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext";


const Addnotes = (props) => {
    const context=useContext(noteContext);
  const {addNote}=context;
  const [note,setNote]=useState({title:"",description:"",tag:""});

  const handleAddNote = (e) =>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
    props.showAlert("Note Added Successful",'success');
    setNote({title:"",description:"",tag:""});

  }
  const onChange= (e) =>{
    setNote({...note,[e.target.name]:e.target.value})
  }


  return (
    <div>
      <div className="container my-3 p-3 d-flex flex-column justify-content-center align-items-center shadow-sm">
        <h1>Add a Note</h1>
        <form className="shadow p-3" style={{maxWidth:"35rem",width:"80%"}} >
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Note Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name='title'
              onChange={onChange}
              aria-describedby="emailHelp"
              minLength={5}
              required
              value={note.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Note Content
            </label>
            <textarea
              rows={5}
              type="text"
              className="form-control"
              id="description"
              onChange={onChange}
              name='description'
              value={note.description}
              minLength={5}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name='tag'
              onChange={onChange}
              aria-describedby="emailHelp"
              value={note.tag}
              minLength={5}
              required
            />
          </div>
          <button  disabled={note.title.length<5 || note.description.length<5 } onClick={ handleAddNote} className="btn btn-primary">
            Add Note
          </button>
        </form>
      </div>
    </div>
  )
}

export default Addnotes
