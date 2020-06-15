import React from "react";

const HeaderWithButtons = ({title, cancelText, doneText, cancelClick, doneClick, doneActive}) => {
    const handleCancel = () => {
        cancelClick()
    }
    const handleDone = () => {
        doneClick()
    }
    const doneClassName = doneActive ? "ui-header-done active" : "ui-header-done"
    return(
       <div className="ui-header">
           <div className="ui-header-cancel" onClick={handleCancel}>{cancelText}</div>
           <div className="ui-header-title">{title ? title : ''}</div>
           <div className={doneClassName} onClick={handleDone}>{doneText}</div>
       </div>
    )
}

export default HeaderWithButtons