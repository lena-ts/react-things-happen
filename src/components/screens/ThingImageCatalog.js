import React from "react";
import HeaderWithButtons from "../ui/headers/HeaderWithButtons";
import PropTypes from 'prop-types';

//Import images
const importAll = (r) => {
    return r.keys().map(r);
}
const images = importAll(require.context('../../assets/images/catalog/', false, /\.(png|jpe?g|svg)$/));

const ThingImageCatalog = ({isVisible, title, cancelText, doneText, cancelClick, doneClick, getImage}) => {

    const handleCancel = () => {
        cancelClick()
    }

    const handleSave = () => {
        doneClick()
    }

    const handleImageClick = (event) => {
        getImage(event.target.id, event.target.src)
        doneClick()
    }

    const className = isVisible ? "add-thing-catalog visible" : "add-thing-catalog"

    const catalog = images.map((image, index)  => (
        <div className="catalog-image-holder" key={index} onClick={handleImageClick}>
            <img src={image} id={index}/>
        </div>
    ) )
    return(
        <section className={className}>
            <HeaderWithButtons
                title={title}
                cancelText={cancelText}
                doneText={doneText}
                cancelClick={handleCancel}

            />
            <div className="catalog">
                {catalog}
            </div>
        </section>
    )
}

ThingImageCatalog.propTypes = {
    title: PropTypes.string,
    cancelText: PropTypes.string,
    doneText: PropTypes.string,
    cancelClick: PropTypes.func,
    doneClick: PropTypes.func
}

ThingImageCatalog.defaultProps = {
    title: "Pick a thing image",
    cancelText: "Cancel",
    doneText: ""
}

export default ThingImageCatalog