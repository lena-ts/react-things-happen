import React from "react";
import PropTypes from 'prop-types';
import NavigationTab from "../ui/navigation/NavigationTab";
import GridListOptions from "../constants/GridListOptions";
import {connect} from "react-redux";
import {setGridListView} from "../../actions/index"

export class SettingsView extends React.Component {
    dispatchGridView = (code) => {
        this.props.setGridListView(code)
    }
    render() {
        const classname = "settings-view container"
        const {title, gridListView} = this.props
        return (
            <section className={classname}>
                <h1>{title}</h1>
                <div className="promo-wrapper">
                    <div className="promo">
                        <div className="promo-text">"Things" Happen Unlimited</div>
                        <div className="promo-button">Get</div>
                    </div>
                </div>
                <ul className="settings-list list-items">
                    <li className="grid-list-view-wrapper">
                        <div>Display</div>
                        <NavigationTab options={GridListOptions} defaultValue={gridListView}
                                       dispatchAction={this.dispatchGridView}/>
                    </li>
                    <li><span>Share with friends</span></li>
                    <li><span>Rate App</span></li>
                </ul>
            </section>
        )
    }
}

SettingsView.propTypes = {
    title: PropTypes.string
}

SettingsView.defaultProps = {
    title: "Settings"
}

const mapStateToProps = state => {
    return {
        gridListView: state.gridListView,
    };
};

const mapDispatchToProps = {
    setGridListView
};


export default connect(mapStateToProps, mapDispatchToProps )(SettingsView);