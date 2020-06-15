import React, {useState, useEffect} from "react";

const Titles = () => {

    const [title, setTitle] = useState('Things happen')

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTitle("Every day")
    //     }, 2000);
    //     return () => clearInterval(interval);
    // }, []);

    document.getElementById("root").onscroll  = () => {
        alert('scroll')
    }
    // setTimeout(() => {
    //     setTitle("Every day")
    //     }, 1000);
    return(
        <React.Fragment>
            <div className="h1">{title}</div>
        </React.Fragment>
    )
}

export default Titles