import React from "react";
import PropTypes from 'prop-types';

export const DeleteButton = ({title, deleteClick}) => {
    const handleClick = () => {
        deleteClick()
    }
    return(
        <div className="button button-delete text-center" onClick={handleClick}>
            <span>
                {title}
            </span>
        </div>
    )
}

DeleteButton.propTypes = {
    title: PropTypes.string
}

DeleteButton.defaultProps = {
    title: "Delete"
}

export default DeleteButton