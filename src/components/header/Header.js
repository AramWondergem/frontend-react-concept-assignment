import React from 'react';

function Header({children}) {
    return (
        <header className="outerbox flex-row">
            <div className="innerbox flex-collumn">
                <nav>
                    <ul>
                        <NavLink>Hottest posts</NavLink>
                        <a href="src/components/header/Header">Reddit</a>
                        <NavLink>Memes</NavLink>
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