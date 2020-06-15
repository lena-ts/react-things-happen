import React from "react";
import Header from "../header/Header";
import List from "../list/List";

const MainView = (openAddThingView) => {
    return(
        <React.Fragment>
            <div className="container">
                <Header openAddThingView={openAddThingView}/>
                <List/>
            </div>
        </React.Fragment>
    )
}

export default MainView