import React from "react";
import Styles from "../css/Pages.module.css";

const Home = () => {
    return (
        <div className={Styles.homeContainer}>
            <div className="home">
                <h1 className="littletitle">Welcome to the Home Page</h1>
                <p>This is the home page of our React application.</p>
            </div>
        </div>
    );
}
export default Home;