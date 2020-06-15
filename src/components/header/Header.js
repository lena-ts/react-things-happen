import React from "react";
import AddThingButton from "./AddThing";
import { connect } from 'react-redux';
import {addThingView} from '../../actions/index'

export class Header extends React.Component {
    handleThing = () => {
        this.props.addThingView(true)
    }
    render(){
        return(
            <header>
            <h2>Things Happen</h2>
            <AddThingButton handleClick={this.handleThing}/>
            </header>
            )
    }
}

const mapStateToProps = state => {
    return {
        things: state.thingsList
    };
};

const mapDispatchToProps = {
    addThingView
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);