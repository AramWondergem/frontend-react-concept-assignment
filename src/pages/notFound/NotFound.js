import React from 'react';
import "./notFound.css"
import Header from "../../components/header/Header";
import {Link} from "react-router-dom";

function NotFound(props) {
    return (
        <>
            <Header>
                <h1>🙊 This page does not exist</h1>
                <Link to="/"><h3>◁ Bring me back to safety</h3></Link>
            </Header>
            <main className="notFound--main">
            </main>
        </>
    );
}

export default NotFound;