import React from 'react';
import "./header.css"
import {NavLink} from "react-router-dom";

function Header({children, logo}) {
    return (
        <header className="outerbox header">
            <div className="innerbox flex-collumn header--innerbox">
                <nav className="header--nav">
                    <ul className="header--ul">
                        <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/">Hottest posts</NavLink>
                        <a href="https://www.reddit.com/">Reddit</a>
                        <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/subreddit/memes">Memes</NavLink>
                    </ul>
                </nav>
                <div className="header--children">
                    <div className="header--logo-title-wrapper">
                    { logo &&
                    <>
                        <div className="image-wrapper header--imagewrapper"><img src={logo} alt=""/></div>
                    </>}
                    {children}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;