import "./HomePage.css";
import  {homepageImg} from "../../assets";
import {Link}  from "react-router-dom";

export default function HomePage(){
    return (
        <div className="homepage-container">
            <div className="homepage-content">
                    <h1 className="website-name">Orange Notes</h1>
                    <p className="main-content-para">
                    Manages daily tasks in the simple way for free </p>
                <div className="login-signup-btn">
                    <Link to="/notes">
                        <button className="startnow-btn">Start With</button>
                    </Link>
                    
                </div>
            </div>
            <div className="homepage-img-content">
                <img src={homepageImg} alt="homepage-img" />
            </div>
        </div>
        )
}