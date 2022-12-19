import React from 'react';
import "./tile.css"
import {Link} from "react-router-dom";
import stylingNumber from "../../helpers/stylingNumberFunction"
import cuttingOfTitle from "../../helpers/cuttingOfTileFunction";

function Tile({title, subreddit, prefix, commentsCount, votesUp, permalink}) {
    const linkSubreddit = `/subreddit/${subreddit}`
    return (

        <article className="tile flex-collumn">
            <a href={`https://www.reddit.com/${permalink}`}><h3>{cuttingOfTitle(title)}</h3></a>
            <div>
                <Link className="tile--link" to={linkSubreddit}>{prefix}</Link>
                <p>{`Comments ${stylingNumber(commentsCount)} - Ups ${stylingNumber(votesUp)}`}</p>
            </div>
        </article>

    );
}

export default Tile;