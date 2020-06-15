import React from "react";

const AddImageButton = ({defaultImage, uploadedThingImage, showPopup}) => {

    const showPopupSettings = () => {
        showPopup()
    }

    const image = defaultImage === null ? null : uploadedThingImage || defaultImage

    return(
        <div className="add-thing-image" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>

            <div className="add-thing-image-button ui-icon-camera" onClick={showPopupSettings}></div>
            <div className="ui-image-placeholder"></div>


        </div>
    )
}

export default AddImageButton