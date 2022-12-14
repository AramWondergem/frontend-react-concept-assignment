import React from 'react';
import "./header.css"
import {NavLink} from "react-router-dom";

function Header({children}) {
    return (
        <header className="outerbox header">
            <div className="innerbox flex-collumn header--innerbox">
                <nav className="header--nav">
                    <ul className="header--ul">
                        <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/">Hottest posts</NavLink>
                        <a href="https://www.reddit.com/">Reddit</a>
                        <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/memes">Memes</NavLink>
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