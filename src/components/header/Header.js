import React from 'react';
import "./header.css"
import {NavLink} from "react-router-dom";

function Header({children}) {
    return (
        <header className="outerbox flex-row header">
            <div className="innerbox flex-collumn">
                <nav>
                    <ul>
                        <NavLink to="/">Hottest posts</NavLink>
                        <a href="https://www.reddit.com/">Reddit</a>
                        <NavLink to="/memes">Memes</NavLink>
                    </ul>
                </nav>
                <div>
                    {children}
                </div>
            </div>
        </header>
    );
}

export default Header;