import React from "react";

const ThingItem = ({id, title, date, image, handleClick, gridListView}) => {
    const handleItemClick = () => {
        handleClick(id)
    }
    const listViewImage = gridListView === "list" ? (<img src={image} />) : null

    const styles = gridListView === "grid" ? ({
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "15px"
    }) : null
    return(
        <div className="item" key={id} onClick={handleItemClick}
             style={styles}>
            <div className="item-wrapper">
                {listViewImage}
                <div className="item-shade">&nbsp;</div>
                <div className="item-date">
                    {date}
                </div>
                <div className="item-title">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default ThingItem