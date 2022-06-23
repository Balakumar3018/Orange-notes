import { Routes, Route } from "react-router-dom";
import {HomePage,NotesPage,ArchievePage,TrashPage,LoginPage,LabelsPage} from "../pages/"

 function NotesRoutes(){
    return(
         <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/notes" element={<NotesPage/>} />
            <Route path="/archieve" element={<ArchievePage/>} />
            <Route path="/trash" element={<TrashPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/label" element={<LabelsPage/>} />
        </Routes> 
    )
}

export { NotesRoutes as Routes}