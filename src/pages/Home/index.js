import React from "react";
import {useLocation} from "react-router-dom";

const Home = () => {
    const {pathname} = useLocation()

    console.log(pathname);

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home;