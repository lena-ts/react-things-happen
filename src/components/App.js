import React from 'react';
import '../styles/components/app.scss';
import MainView from "./screens/MainView";
import ThingView from "./screens/ThingView";
// import dynamic from "next/dynamic";
import {connect} from "react-redux";
import {showCurrentThing, setTabView} from "../actions";
import AddThingView from "./screens/AddThingView";
import ReactCSSTransitionGroup from 'react-transition-group';
import TabsOptions from "./constants/TabsOptions";
import NavigationTab from "./ui/navigation/NavigationTab";
import SettingsView from "./screens/SettingsView";

// const ThingView = dynamic(import("./screens/ThingView"));

export class App extends React.Component {

    handleClose = () => {
        this.props.showCurrentThing(null)
    }

    componentDidMount() {
        this.props.setTabView("things")
    }

    dispatchView = (code) => {
        this.props.setTabView(code)
    }

    render() {
        const { currentThing, tabView, addThingView } = this.props
        const thingView = currentThing ? <ThingView
            isVisible={currentThing ? currentThing : null}
            closeScreen={this.handleClose}
            title={currentThing ? currentThing.title : ''}
            date={currentThing ? currentThing.date : ''}
            selectedDays={currentThing ? currentThing.selected_days : ''}
            image={currentThing ? currentThing.image_path : ''}
        /> : null

        const isAddThingView = currentThing ? null : (<AddThingView
            isVisible={this.props.addThingView}
        />)

        const activeTabView = tabView === "things" ? (
            <React.Fragment>
                <MainView />
                {thingView}
                {isAddThingView}
            </React.Fragment>
        )
        : (
            <SettingsView />
        )

        const overflowHidden =  currentThing || addThingView ? 'is-hidden' : ''
        return (
            <div className={`app ${overflowHidden}`}>
                {activeTabView}
                <NavigationTab options={TabsOptions} defaultValue="things" dispatchAction={this.dispatchView}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentThing: state.currentThing,
        addThingView: state.addThingView,
        tabView: state.tabView,
    };
};

const mapDispatchToProps = {
    showCurrentThing,
    setTabView

};

export default connect(mapStateToProps, mapDispatchToProps )(App);
