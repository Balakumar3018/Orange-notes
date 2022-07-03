import "./NotesPage.css"
import {NotesSidebar}   from "../../components/index";
import {CreateNotes}  from "../../components/index";
import { useNotes } from "../../contexts/Notes-context";
import {NoteCard} from "../../components/index";

export default function NotesPage(){
    const {noteState:{notes}}=useNotes();
    return (
        <div className="notes-page">
            <div className="notes-container">
                <NotesSidebar/>
                <CreateNotes/>
                <div className="display-notes">
                    {
                    notes.length >0 ? (notes.map((item)=> <NoteCard note={item} key={item._id} />))
                    :
                    (<h4>Created notes appear here</h4>)        
                    }
                </div>
            </div>
        </div>
    )
}