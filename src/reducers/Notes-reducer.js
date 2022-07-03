const NotesReducer=(noteState,{type,payload})=>{
    switch(type){
        case "Add_Note":
            return {...noteState, notes:[...payload]}
        default:
            return noteState;    
    }
}
export {NotesReducer}