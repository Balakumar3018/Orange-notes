import axios from "axios";

const addNotes= async(noteDispatch,note)=>{
    console.log(note);
    const authToken = localStorage.getItem("AUTH_TOKEN");
    const Headers = { authorization: authToken };
    console.log(authToken);
    try{
        const {data:{notes},status}= await axios.post("/api/notes",note,{ headers: Headers });
        if(status===201){
            noteDispatch({type:"Add_Note",payload:notes});
        }
    }
    catch(error){
        console.log(error)
    }
}

export {addNotes};