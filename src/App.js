import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Subreddit from "./pages/subreddit/Subreddit";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/notFound/NotFound";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route exact path="/subreddit/:subReddit" element={<Subreddit/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
