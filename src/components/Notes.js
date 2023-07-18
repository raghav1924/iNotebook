import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {
    const context=useContext(noteContext);
  const {notes}=context;
  return (
    <div >
      <div className="row shadow-sm my-3">
        <h2>Your Notes</h2>
        {notes.map((note)=>{
          return <NoteItem note={note} key={note._id}/>
        })}
      </div>
    </div>
  )
}

export default Notes
