import React from "react";
import PropTypes from 'prop-types';

const AddThingTitle = ({getThingTitle, label, title, defaultValue}) => {

    const handleChange = (event) => {
        getThingTitle(event.target.value)
    }

    return(
        <div className="add-thing-title">
            <div className="label">{label}</div>
            <input type="text" placeholder={title} onChange={handleChange} value={defaultValue} name="title"/>
        </div>
    )
}

AddThingTitle.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string
}

AddThingTitle.defaultProps = {
    label: "Thing Name",
    title: "For example, Buy contact lens"
}

export default AddThingTitle