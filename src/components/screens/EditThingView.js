import React from "react";
import PropTypes from 'prop-types';
import {editThingView, pushEditedThing, showCurrentThing, deleteThing} from "../../actions";
import {connect} from "react-redux";
import ThingSettings from "./ThingSettings";

class EditThingView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.currentThing.id,
            title: this.props.currentThing.title,
            date: this.props.currentThing.date,
            selectedDays: this.props.currentThing.selectedDays,
            image_path: this.props.currentThing.image_path
        }
    }

    thingTitle = (value) => {
        this.setState({
            title: value
        })
    }

    thingImage = (src) => {
        this.setState({
            image_path: src
        })
    }

    handleCancel = () => {
        this.props.editThingView(false)
    }
    handleDone = () => {
        const {things, showCurrentThing, pushEditedThing, editThingView, currentThing} = this.props

        // console.log('Edited Thing:', this.state)
        console.log('things', things, things.indexOf(currentThing))

        const indexOfCurrentThing = things.indexOf(currentThing)

        showCurrentThing(this.state)

        pushEditedThing(things, indexOfCurrentThing, this.state)

        editThingView(false)

        // console.log('New Current Thing:', this.props.currentThing)
    }

    handleDeleteThing = () => {

        const {things, currentThing, deleteThing} = this.props
        const indexOfCurrentThing = things.indexOf(currentThing)

        deleteThing(things, indexOfCurrentThing)

        console.log('things', things, things.length, things.indexOf(currentThing))

        this.props.editThingView(false)
        this.props.showCurrentThing(null)
    }

    render() {
        const {isVisible, title, cancelText, doneText} = this.props
        const className = isVisible ? "edit-thing-view overflow-view visible" : "edit-thing-view overflow-view"

        return(
            <ThingSettings
                classname={className}
                header={{
                    title: title,
                    cancelText: cancelText,
                    doneText: doneText,
                    handleCancel: this.handleCancel,
                    handleDone: this.handleDone
                }}
                thingImageSettings={{
                    // thingImage: this.thingImage,
                    imagePath: this.state.image_path
                }}
                thingTitleSettings={{
                    thingTitle: this.thingTitle,
                    defaultTitle: this.state.title
                }}
                hasDeleteButton={{
                    handleDeleteThing: this.handleDeleteThing
                }}
                getThingImage={this.thingImage}
                isVisible={isVisible}
            />
        )
}
}

EditThingView.propTypes = {
    title: PropTypes.string,
    cancelText: PropTypes.string,
    doneText: PropTypes.string
}

EditThingView.defaultProps = {
    title: "Edit thing",
    cancelText: "Cancel",
    doneText: "Save"
}

const mapStateToProps = state => {
    return {
        things: state.thingsList,
        currentThing: state.currentThing,
    };
};

const mapDispatchToProps = {
    editThingView,
    pushEditedThing,
    showCurrentThing,
    deleteThing
};

export default connect(mapStateToProps, mapDispatchToProps)(EditThingView);