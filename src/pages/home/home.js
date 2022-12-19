import React, {useState} from 'react';
import "./home.css"
import Header from "../../components/header/Header";
import redditHead from "../../assets/logo.png"
import Tile from "../../components/Tile/Tile";
import useFetch from "../../customHooks/useFetch";

function Home(props) {
    const [data, setData] = useState(undefined);
    const [catchError, setCatchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const url = "https://www.reddit.com/hot.json?limit=15";

    useFetch(url, setData, setCatchError, setIsLoading)


    return (
        <>
            <Header logo={redditHead}>
                <h1>Reddit</h1>
            </Header>
            <main className="outerbox overview">
                <div className="innerbox flex-collumn overview--innerbox">
                    <div className="flex-collumn overview--titles">
                        <h2>Hottest posts</h2>
                        <h4>on Reddit right now</h4>
                    </div>
                    <div className="flex-wrap-row overview--tiles">
                        {data && !catchError &&
                            data.data.children.map((object) => {

                                const {
                                    title,
                                    subreddit_name_prefixed: prefix,
                                    subreddit,
                                    ups,
                                    num_comments,
                                    permalink
                                } = object.data;

                                console.log(object.data)

                                return <Tile
                                    key={title}
                                    title={title}
                                    subreddit={subreddit}
                                    prefix={prefix}
                                    commentsCount={num_comments}
                                    votesUp={ups}
                                    permalink={permalink}/>


                            })
                        }
                        {isLoading && <p>Information is coming</p>}
                        {catchError && <p>{catchError}</p>}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;
