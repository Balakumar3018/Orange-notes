import "./NotesSidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faHome,faTag, faTrash, faUser} from '@fortawesome/free-solid-svg-icons';

export default function NotesSidebar (){
    return (
                <div className="notes-sidebar">
                    <ul className="content-sidebar">
                        <li className="item-sidebar"><FontAwesomeIcon icon={faHome} /> Home</li>
                        <li className="item-sidebar"><FontAwesomeIcon icon={faTag} /> Labels</li>
                        <li className="item-sidebar"><FontAwesomeIcon icon={faArchive} /> Archieve</li>
                        <li className="item-sidebar"><FontAwesomeIcon icon={faTrash} /> Trash</li>
                        <li className="item-sidebar"><FontAwesomeIcon icon={faUser} /> Profile</li>
                        <li className="item-sidebar">New Note</li>
                    </ul>
                </div>
    )
}
