import NoteContext from "./noteContext";

const NoteState= (props) =>{

    const state={
        "name": "Raghav",
        "class": "Supreme level"
    }
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;