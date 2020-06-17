import React from "react";

const AddThingButton = (handleClick) => {
    const handleButtonClick = () => {
        handleClick.handleClick()
    }
    return(
        <button className="addthing-button" onClick={handleButtonClick}>
            <span>+</span>
        </button>
    )
}

export default AddThingButton;