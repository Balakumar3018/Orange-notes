import "./NavigationTop.css";
import {Link} from "react-router-dom";

export default function NavigationTop(){
    return(
            <div className="navigation-top">
                <h1 className="website-name">OrangeNotes</h1>
                <div className="navigation-links">
                    <Link to="/">
                        <button className="nav-btn">Home</button>
                    </Link>
                    <Link to="/notes">
                        <button className="nav-btn">Start</button>
                    </Link>
                    <Link to="/login">
                        <button className="nav-btn">Login</button>
                    </Link>
                </div>
            </div>
    )
}