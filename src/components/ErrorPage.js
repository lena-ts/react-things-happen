import React from "react";
import {Link} from "react-router-dom"
import image from "../assets/images/error-icon2.png"

const ErrorPage = () => {
    return(
        <div className="error-page">
            <img src={image} alt="error page" />
            <div>
                <div className="error-text">Nothing found here...</div>
                <Link to="/react-things-happen">Go to Homepage</Link>
            </div>
        </div>
    )
}

export default ErrorPage