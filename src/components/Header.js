import React from "react";
import { Link } from "react-router-dom";

function Header () {
    return(
        <div>
            <nav>
                <ul>
                    <li> 
                        <Link to="/about"> 01. About </Link> 
                    </li>

                    <li> 
                        <Link to="/projects"> 02. Projects </Link> 
                    </li>
                
                    <li> 
                        <Link to="/contact"> 03. Contact </Link> 
                    </li>
                </ul>
            </nav>

        </div>
    )}
    
export default Header;
