import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import icon from "../assets/images/icon-red2.png";
import Titles from "./constants/Titles";
import appstoreImage from "../assets/images/appstore.png";

const Intro = () => {
    return(
        <div className="intro-text">
            <div className="app-icon">
                <Link to="/">
                    <img src={icon} alt="Thing Happen App" />
                    <span>Things Happen</span>
                </Link>
            </div>
            <Titles />
            <div className="h2">Track things you do.</div>
            <div className="intro-button">
                <a href="https://apps.apple.com/app/things-happen-life-tracker/id1512430864">
                    <img src={appstoreImage} alt="Download on the appstore" />
                </a>
            </div>
            <div className="info-links">
                <a href="mailto:tobuyapp.ios@gmail.com">Contacts</a>
                <Switch>
                    <Route path="/react-things-happen" exact>
                        <Link to="/react-things-happen/privacy-policy">Privacy Policy</Link>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Intro