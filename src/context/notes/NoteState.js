import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
  const host = process.env.REACT_APP_BASE_URL;

  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Fetch all Notes
  const getNotes = async() => {
    // API Call
    const response = await fetch(`${host}api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", 
        "auth-token": localStorage.getItem('token')
      }
    });
    const json= await response.json();
    setNotes(json);


    
  };
  // Add Notes
  const addNote = async(title, description, tag) => {
    
    // TODO : add API
     const response=await fetch(`${host}api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
    });

    const json= await response.json();
    setNotes(notes.concat(json));
  };
  // Delete Notes
  const deleteNote = async(id) => {

     await fetch(`${host}api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }
    });
    
    //  getNotes();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    // console.log(newNotes);
    setNotes(newNotes);
  };

  // edit Notes
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
    });

    const json= await response.json();
    console.log(json);

    // getNotes();

    const newNotes=JSON.parse(JSON.stringify(notes));
    
    // Logic to to edit in the client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        newNotes[index]=element;
        break;
      }

    }
    setNotes(newNotes);
    
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
