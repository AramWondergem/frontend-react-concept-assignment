import React, {useState} from 'react';
import "./subreddit.css"
import {Link, useParams} from "react-router-dom";
import Header from "../../components/header/Header";
import useFetch from "../../customHooks/useFetch";
import stylingNumber from "../../helpers/stylingNumberFunction"



function Subreddit(props) {
    const{subReddit} = useParams()
    const [data, setData] = useState(undefined);
    const [catchError, setCatchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState(`https://www.reddit.com/r/${subReddit}/about.json`);

    useFetch( url, setData , setCatchError, setIsLoading);

    return (
        <>
            <Header>
                {
                   data && <h1>{data.data.display_name_prefixed}</h1>
                }
                {isLoading && <p>page is loading</p>}
                {catchError && <p>error</p> }
            <h4>Subreddit specifications</h4></Header>
            <main className="outerbox subreddit">
                <div className="innerbox subreddit--innerbox">
                    <div className="subreddit--information">

                        {data && !catchError &&
                            <>
                                <h3 className="subreddit--information--header">Title</h3>
                                <p>{data.data.title}</p>
                                <h3 className="subreddit--information--header">Description</h3>
                                <p>{data.data.public_description}</p>
                                <h3 className="subreddit--information--header">Number of subscribers</h3>
                                <p>{stylingNumber(data.data.subscribers)}</p>
                            </>

                        }



                        {isLoading && <p>page is loading</p>}
                        {catchError && <p>{catchError}</p> }

                    </div>
                    <div>
                        <span className="subreddit--link-arrow"> ‹ </span>
                        <Link className="subreddit--link" to="/">Take me back</Link>
                    </div>
                </div>

            </main>
        </>
    );
}

export default Subreddit;