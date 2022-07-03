import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette,faTag, faThumbtack} from '@fortawesome/free-solid-svg-icons';
import "./CreateNotes.css";
import { useNotes } from '../../contexts/Notes-context';
import {addNotes}  from "../../utilities/addNotes";

export default function CreateNotes(){
        const {note,setNote,noteDispatch}=useNotes();
        const addNoteHandler=(e)=>{
            e.preventDefault();
            if(!( note.title === "" && note.description === "" )){
                addNotes(noteDispatch,{note:note});
                console.log(note)
            }
        }
    return (
        <div className="notes-main-content">
                    <form className="create-notes" 
                        onSubmit={(e)=>addNoteHandler(e)}>
                            <label className="enter-title">
                                <input type="text" className="enter-title" id="enter-title-here" placeholder="Title"
                                onChange={(e)=>setNote({ ...note, title: e.target.value })} 
                                />
                            </label>
                            <FontAwesomeIcon icon={faThumbtack} className="create-note-thumbtack-icon" />
                            <textarea name="note-description" id="" cols="30" rows="4" className="note-description" placeholder="Note"
                            onChange={(e)=>setNote({ ...note, description: e.target.value })} 
                            ></textarea>
                        <div className="create-notes-icons">
                            <button className="save-note" type="submit">save note</button>
                            <FontAwesomeIcon icon={faPalette} className="create-note-palette-icon" />
                            <FontAwesomeIcon icon={faTag}  className="create-note-tag-icon"/>
                            <select name="label" id="label-select">
                                <option value="label">work</option>
                                <option value="study">study</option>
                                <option value="label">books</option>
                            </select>
                        </div>
                 </form>
         </div>
    )
}
export {CreateNotes}