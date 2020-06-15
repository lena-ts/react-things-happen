import React, {useState} from "react"
import HeaderWithButtons from "../ui/headers/HeaderWithButtons";
import AddImageButton from "./addthing/AddImageButton";
import AddThingTitle from "./addthing/AddThingTitle";
import DeleteButton from "../ui/buttons/DeleteButton";
import ThingImageCatalog from "./ThingImageCatalog";
import ActionSheet from "../ui/popup/ActionSheet";

const ThingSettings = ({classname, hasDeleteButton, header, thingImageSettings, thingTitleSettings, getThingImage, isVisible}) => {

    const deleteButton = hasDeleteButton ? <DeleteButton deleteClick={hasDeleteButton.handleDeleteThing} /> : null
    const [isPopup, setPopup] = useState(false)
    const [uploadedImage, setUploadedImage] = useState(null)
    const [catalogVisible, setCatalog] = useState(false)

    //Popup
    const cancelPopup = () => {
        setPopup(false)
    }

    const showPopup = () => {
        setPopup(true)
    }

    //Catalog
    const doCatalog = () => {
        setCatalog(true)
        setPopup(false)
    }

    const doUpload = (event) => {
        setPopup(false)
        if (event.target.files[0]) {
            setUploadedImage(URL.createObjectURL(event.target.files[0]))
            getThingImage(URL.createObjectURL(event.target.files[0]))
        }

    }

    const closeCatalog = () => {
        setCatalog(false)
    }

    const getCatalogImage = (id, src) => {
        console.log('id:', id, 'src:', src)
        setUploadedImage(src)
        console.log(uploadedImage)
        getThingImage(src)
    }

    const popup = isVisible ? (
        <ActionSheet
            isVisible={isPopup}
            cancelPopup={cancelPopup}
            doCatalog={doCatalog}
            doUpload={doUpload}
        />
    ) : null

    const catalog  = isVisible ? (
        <ThingImageCatalog
            isVisible={catalogVisible}
            cancelClick={closeCatalog}
            doneClick={closeCatalog}
            getImage={getCatalogImage}
        />
    ) : null

    return(
        <React.Fragment>
        <section className={classname} >
            <HeaderWithButtons
                title={header.title}
                cancelText={header.cancelText}
                doneText={header.doneText}
                cancelClick={header.handleCancel}
                doneClick={header.handleDone}
                doneActive={header.doneActive}
            />
            <AddImageButton
                uploadedThingImage={uploadedImage}
                defaultImage={thingImageSettings.imagePath}
                showPopup={showPopup}
            />
            <AddThingTitle
                getThingTitle={thingTitleSettings.thingTitle}
                defaultValue={thingTitleSettings.defaultTitle}
            />
            {deleteButton}
        </section>
            {popup}
            {catalog}
        </React.Fragment>
    )
}

export default ThingSettings