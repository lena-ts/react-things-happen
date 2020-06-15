import React from "react";
import {connect} from "react-redux";
import ThingItem from "./ThingItem";
import {showCurrentThing} from "../../actions";

export class List extends React.Component {
    handleThingClick = id => {
        const currentThing = this.props.things.filter(item => item.id === id).pop()

        this.props.showCurrentThing(currentThing)
    }

    render() {
        const { things, gridListView } = this.props

        // console.log('THINGS in main view', things)

        const data = things.map(item => (
            <ThingItem
                key={item.id}
                id={item.id}
                image={item.image_path}
                title={item.title}
                date={item.date}
                selectedDays = {item.selected_days}
                handleClick={this.handleThingClick}
                gridListView={gridListView}
            />
        ))

        const listClass = gridListView === "list" ? "list-view" : ""
        return(
            <div className={`list  ${listClass}`}>
                {data}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        things: state.thingsList,
        gridListView: state.gridListView
    };
};
const mapDispatchToProps = {
    showCurrentThing
};

export default connect(mapStateToProps, mapDispatchToProps)(List);