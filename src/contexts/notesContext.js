import {useContext,createContext, useState, useReducer} from "react";
import {NotesReducer}  from "../reducers/Notes-reducer"

const NotesContext =createContext();


const NotesProvider=({children})=>{
    const [note,setNote]=useState({
        title:"",
        description:""
    });
    
    const [noteState, noteDispatch]=useReducer(NotesReducer,{
        notes:[]
    });

    return(
        <NotesContext.Provider value={{note,setNote,noteState,noteDispatch}}>
            {children}
        </NotesContext.Provider>
    )
};
const useNotes=()=>useContext(NotesContext);

export {useNotes,NotesProvider}
