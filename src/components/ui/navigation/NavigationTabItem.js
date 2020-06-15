import React from "react";

const NavigationTabItem = ({text, code, isActive, handleChange}) => {
    const handleClick = (e) => {
        handleChange(e.target.value)
    }
    return(
        <label className={isActive ? 'active' : ''}>
            <input type="radio" onClick={handleClick} value={code}/>
            {text}
        </label>
    )
}

export default NavigationTabItem;