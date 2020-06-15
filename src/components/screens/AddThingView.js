import React from "react";
import PropTypes from 'prop-types';
import {addThing, addThingView} from "../../actions";
import {connect} from "react-redux";
import imagePlaceholder from "../../assets/images/image_placeholder_white.png"
import ThingSettings from "./ThingSettings";


class AddThingView extends React.Component {
    constructor() {
        super()
        this.state = {
            id: null,
            title: "",
            date: null,
            selectedDays: [],
            image_path: null
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

    clearState = () => {
        this.setState({
            id: null,
            title: "",
            date: null,
            selectedDays: [],
            image_path: null
        })
    }

    cancelView = () => {
        this.props.addThingView(false)
        this.clearState()
    }

    saveView = () => {
        this.props.things.map((thing, index) => thing.id = index )
        const newThing = {
            id: this.props.things.length,
            title: this.state.title,
            date: "Never",
            selectedDays: [],
            image_path: this.state.image_path != null ? this.state.image_path : imagePlaceholder
        }

        console.log('newThing', newThing)
        if (this.state.title.length) {
            this.props.addThing(this.props.things, newThing)
        }
        this.props.addThingView(false)
        this.clearState()
    }

    render(){
        const {title, cancelText, doneText, isVisible} = this.props

        const doneActive = this.state.title.length

        const className = isVisible ? "add-thing-view overflow-view visible" : "add-thing-view overflow-view"

        return(
            <ThingSettings
                classname={className}
                hasDeleteButton={false}
                header={{
                    title: title,
                    cancelText: cancelText,
                    doneText: doneText,
                    handleCancel: this.cancelView,
                    handleDone: this.saveView,
                    doneActive: doneActive
                }}
                thingImageSettings={{
                    imagePath: this.state.image_path
                }}
                thingTitleSettings={{
                    thingTitle: this.thingTitle,
                    defaultTitle: this.state.title
                }}
                getThingImage={this.thingImage}
                isVisible={isVisible}
            />
        )
    }
}

AddThingView.propTypes = {
    title: PropTypes.string,
    cancelText: PropTypes.string,
    doneText: PropTypes.string
}

AddThingView.defaultProps = {
    title: "Thing Name",
    cancelText: "Cancel",
    doneText: "Save"
}

const mapStateToProps = state => {
    return {
        things: state.thingsList
    };
};

const mapDispatchToProps = {
    addThing,
    addThingView
};

export default connect(mapStateToProps, mapDispatchToProps)(AddThingView);