import React from "react";
import "./header.css";
import { FaHome, FaFacebookMessenger} from "react-icons/fa";


const Header = () => {
    return (
        
    <div class="header">
        <h1>Instagram</h1>
        <input type="text" className="search-box" placeholder="search"/>
        <div className="header-items">
            <i><FaHome/></i>
            <i><FaFacebookMessenger/></i>
        </div>
    </div>
    


    )
}
export default Header