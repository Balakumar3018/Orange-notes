import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faFileArchive, faTrash} from '@fortawesome/free-solid-svg-icons';

 export default function NoteCard({note}){
    const {title,description}=note;
    return(
                    <div className="new-note-card">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <button>label</button>
                        <div className="note-options"> 
                            <p>30/06/2022, 8:34:37 am 
                                <span><FontAwesomeIcon icon={faEdit}  className="create-note-tag-icon"/>
                                <FontAwesomeIcon icon={faFileArchive}  className="create-note-tag-icon"/>
                                <FontAwesomeIcon icon={faTrash}  className="create-note-tag-icon"/>
                                </span>
                            </p>
                        </div>
                    </div>
    )
}
