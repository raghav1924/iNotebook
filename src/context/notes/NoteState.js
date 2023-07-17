import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState= (props) =>{

    const notesInitial=[
        {
          "_id": "64b25b975c8b4ae42fecbc31",
          "user": "64abda3fee580c4e322dfd7f",
          "title": "my Second note again",
          "description": "Checking if the notes are added was updated or note??",
          "tag": "personal",
          "date": "2023-07-15T08:40:55.937Z",
          "__v": 0
        },
        {
          "_id": "64b282812c371c60fdb16978",
          "user": "64abda3fee580c4e322dfd7f",
          "title": "my Second note",
          "description": "Checking if the notes are added or note",
          "tag": "Jatin",
          "date": "2023-07-15T11:26:57.882Z",
          "__v": 0
        },
        {
          "_id": "64b282822c371c60fdb1697a",
          "user": "64abda3fee580c4e322dfd7f",
          "title": "my Second note",
          "description": "Checking if the notes are added or note",
          "tag": "Jatin",
          "date": "2023-07-15T11:26:58.708Z",
          "__v": 0
        },
        {
          "_id": "64b282832c371c60fdb1697c",
          "user": "64abda3fee580c4e322dfd7f",
          "title": "my Second note",
          "description": "Checking if the notes are added or note",
          "tag": "Jatin",
          "date": "2023-07-15T11:26:59.088Z",
          "__v": 0
        },
        {
          "_id": "64b282832c371c60fdb1697e",
          "user": "64abda3fee580c4e322dfd7f",
          "title": "my Second note",
          "description": "Checking if the notes are added or note",
          "tag": "Jatin",
          "date": "2023-07-15T11:26:59.314Z",
          "__v": 0
        }
      ]
      const [notes,setNotes]=useState(notesInitial);
    return (
        <NoteContext.Provider value={{notes,setNotes}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;