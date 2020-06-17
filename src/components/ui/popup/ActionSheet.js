import React from "react";
import PropTypes from 'prop-types';

const ActionSheet = ({isVisible, catalogText, buttonText, cancelPopup, doCatalog, doUpload}) => {
    const handleCancel = () => {
        cancelPopup()
    }
    const handleCatalog = () => {
        doCatalog()
    }
    const handleUpload = (event) => {
        doUpload(event)
    }

    const popupClass = isVisible ? "ui-popup visible" : "ui-popup"

    return(
        <section className={popupClass}>
            <div className="ui-popup-body">
                <div className="ui-popup-body__options">
                    <div className="ui-popup-body__option">
                        <button onClick={handleCatalog}>{catalogText}</button>
                    </div>
                    <div className="ui-popup-body__option file-option">
                        <input type="file" accept="image/*" name="image" onChange={handleUpload} />
                    </div>
                </div>
                <button className="ui-popup-body__button" onClick={handleCancel}>
                    {buttonText}
                </button>
            </div>
            <div className="ui-popup-shade"></div>
        </section>
    )
}

ActionSheet.propTypes = {
    catalogText: PropTypes.string,
    buttonText: PropTypes.string
}

ActionSheet.defaultProps = {
    catalogText: "Choose from catalog",
    buttonText: "Cancel"
}

export default ActionSheet