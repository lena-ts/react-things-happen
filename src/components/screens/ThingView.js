import React from "react";
import HeaderWithButtons from "../ui/headers/HeaderWithButtons";
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {changeSelectedDays, editThingView, pushEditedThing} from "../../actions";
import {connect} from "react-redux";
import EditThingView from "./EditThingView";

class ThingView extends React.Component  {

    constructor(props) {
        super(props)
        this.handleDayClick = this.handleDayClick.bind(this)
        this.state = {
                id: this.props.currentThing.id,
                title: this.props.currentThing.title,
                date: this.props.currentThing.date,
                image_path: this.props.currentThing.image_path,
                selectedDays: this.props.currentThing.selectedDays
        }
    }

    componentDidMount() {
        this.setState({
            selectedDays: this.props.currentThing.selectedDays.map(item => new Date(item))
        })
        // console.log('selected Days on mount', this.state.selectedDays)
    }

    handleEdit = () => {
        this.props.editThingView(true)
    }

    handleDayClick(day, { selected, disabled }) {

        // const {things, currentThing, pushEditedThing, showCurrentThing} = this.props

        if (disabled) {
            return
        }
        const { selectedDays } = this.state;
        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays.splice(selectedIndex, 1);
        } else {
            selectedDays.push(day);
        }


        const lastOfPreselectedDays = this.state.selectedDays
        lastOfPreselectedDays.map(item => item.getTime())

        if (lastOfPreselectedDays.length) {
            const maxOfPreselected = lastOfPreselectedDays.reduce(function(a,b) {
                return Math.max(a, b);
            })

            let date = new Date()
            const today = date.getTime()

            const oneDay = 24 * 60 * 60 * 1000;

            const diffDays = Math.floor(Math.abs((today - maxOfPreselected) / oneDay));

            const text = diffDays.toString().split().pop() === "1" ? " day ago" : " days ago"

            console.log('till today', diffDays, (today - maxOfPreselected) / oneDay)

            this.setState({
                date: diffDays === 0 ? "Today" : diffDays + text,
                selectedDays: selectedDays
            })
        }

        else {
            this.setState({
                date: "Never",
                selectedDays: selectedDays
            })
        }

        // const {things, currentThing, pushEditedThing} = this.props
        //
        // const indexOfCurrentThing = things.indexOf(currentThing)
        //
        // pushEditedThing(things, indexOfCurrentThing, this.state)
    }


    handleClose = () => {

        const finalThing = {
            id: this.props.currentThing.id,
            title: this.props.currentThing.title,
            date: this.state.date,
            image_path: this.props.currentThing.image_path,
            selectedDays: this.state.selectedDays
        }
        console.log('IMAGE', this.state, this.props.currentThing)
        const {things, currentThing, pushEditedThing} = this.props

        const indexOfCurrentThing = things.indexOf(currentThing)

        pushEditedThing(things, indexOfCurrentThing, finalThing)

        this.props.closeScreen()
    }

    getVisibleClass = () => {
        // console.log('it works', this.state.date)

        return 'words'
    }


    render(){
        const {title, image, isVisible} = this.props
        const active = isVisible ? 'visible' : ''

        setTimeout(() => { this.getVisibleClass() }, 2000)

        const  future = {
            after: new Date()
        }


        return(
            <React.Fragment>
                <section className={`thing-view overflow-view` + ' ' + active}>
                    <div className="image-holder">
                        <div className="image-shade"></div>
                         <img src={image} alt={title} />
                    </div>
                    <div className="thing-view-content">
                        <HeaderWithButtons
                            cancelClick={this.handleClose}
                            cancelText="Back"
                            doneClick={this.handleEdit}
                            doneText="Edit"
                        />
                        <div className="thing-view-info">
                            <div className="thing-view-date">{this.state.date}</div>
                            <div className="thing-view-title">{title}</div>
                        </div>
                    </div>
                    <div className="calendar">
                        <DayPicker
                            onDayClick={this.handleDayClick}
                            selectedDays={this.state.selectedDays}
                            disabledDays={future}

                        />
                    </div>
                </section>
                <EditThingView isVisible={this.props.editThingViewState}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentThing: state.currentThing,
        things: state.thingsList,
        editThingViewState: state.editThingView
    };
};

const mapDispatchToProps = {
    changeSelectedDays,
    editThingView,
    pushEditedThing
};

export default connect(mapStateToProps, mapDispatchToProps )(ThingView);