import "./NotesPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPalette,faTag, faThumbtack} from '@fortawesome/free-solid-svg-icons'
import {NotesSidebar}   from "../../components/index"
export default function NotesPage(){
    return (
        <div className="notes-page">
            <div className="notes-container">
                <NotesSidebar/>
                <div className="notes-main-content">
                    <div className="create-notes">
                        <div className="note-title">
                            <label className="enter-title">
                                <input type="text" className="enter-title" id="enter-title-here" placeholder="Title"/>
                            </label>
                            <FontAwesomeIcon icon={faThumbtack} className="create-note-thumbtack-icon" />
                        </div>
                        <div>
                            <textarea name="note-description" id="" cols="30" rows="4" className="note-description" placeholder="Note"></textarea>
                        </div> 
                        <div className="create-notes-icons">
                            <button className="save-note">save note</button>
                            <FontAwesomeIcon icon={faPalette} className="create-note-palette-icon" />
                            <FontAwesomeIcon icon={faTag}  className="create-note-tag-icon"/>
                            <select name="label" id="label-select">
                                <option value="label">work</option>
                                <option value="study">study</option>
                                <option value="label">books</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}