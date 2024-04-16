import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
            <div><h1>Home</h1></div>
            <Link to="/sobre">Sobre</Link>
        </>
    );
}

export default Home;