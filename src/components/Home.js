import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Notes from "./Notes";

const Home = () => {
  const context=useContext(noteContext);
  const {notes,setNotes}=context;

  return (
    <div>
      <div className="container my-3 p-3 d-flex flex-column justify-content-center align-items-center shadow-sm">
        <h1>Add a Note</h1>
        <form className="shadow p-3" style={{width:"35rem"}}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Note Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Note Content
            </label>
            <textarea
              rows={5}
              type="textarea"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Note
          </button>
        </form>
      </div>
      <Notes/>
    </div>
  );
};

export default Home;
