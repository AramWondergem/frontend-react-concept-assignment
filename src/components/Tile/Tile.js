import React from 'react';
import "./tile.css"
import {Link} from "react-router-dom";

function Tile({title, subreddit, prefix, commentsCount, votesUp}) {
    const linkSubreddit = `/${subreddit}`
    return (

            <article className="tile flex-collumn">
                <div><h3>{title}</h3></div>
                <div className="flex-collumn">
                    <Link className="tile--link" to={linkSubreddit}>{prefix}</Link>
                    <p>{`Comments ${commentsCount} - Ups ${votesUp}`}</p>
                </div>
            </article>

    );
}

export default Tile;