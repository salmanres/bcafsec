import React, { Fragment } from "react";
import Navbar from "./navigation/Navbar";
import HomePage from "./HomePage";

function LandingPage(){
    return(
        <Fragment>
            <Navbar />
            <HomePage />
            <h1>landing Page</h1>
            <p>this is a landing page</p>
        </Fragment>
    )
};

export default LandingPage;