import React from 'react';
import "./tile.css"
import {Link} from "react-router-dom";

function Tile({link, title,src, subRedditName, commentsCount, votesUp}) {
    return (
        <Link to={link}>
            <article className="tile flex-collumn">
                <div><H3>{title}</H3></div>
                <div className="flex-collumn">
                    <a className="tile--link" href={src}>subRedditName</a>
                    <p>`Comments ${commentsCount} - Ups ${votesUp}`</p>
                </div>
            </article>
        </Link>
    );
}

export default Tile;