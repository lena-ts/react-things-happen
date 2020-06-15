import {
    ADD_THING_VIEW,
    ADD_THING,
    CHANGE_SELECTED_DAYS,
    SHOW_CURRENT_THING,
    EDIT_THING_VIEW,
    PUSH_EDITED_THING,
    DELETE_THING,
    SET_TAB_VIEW,
    SET_GRID_LIST_VIEW
} from "../actions/types";
import SampleData from "../data/SampleData";

const initialState = {
    thingsList: SampleData,
    currentThing: null,
    addThingView: false,
    editThingView: false,
    tabView: "things",
    gridListView: "grid"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_THING_VIEW:
            return { ...state, addThingView: action.payload}
        case SET_TAB_VIEW:
            return { ...state, tabView: action.payload}
        case SET_GRID_LIST_VIEW:
            return { ...state, gridListView: action.payload}
        case ADD_THING:
            //Return copy of state, do not modify state directly
            return { ...state, thingsList: Array.prototype.splice.apply(state.thingsList, [0, action.payload.length].concat(action.payload))}
        case SHOW_CURRENT_THING:
            return {...state, currentThing: action.payload}
        case CHANGE_SELECTED_DAYS:
            return {...state, thingsList: action.payload}
        case EDIT_THING_VIEW:
            return { ...state, editThingView: action.payload}
        case PUSH_EDITED_THING:
            return { ...state, thingsList: Array.prototype.splice.apply(state.thingsList, [0, action.payload.length].concat(action.payload))}
        case DELETE_THING:
            return { ...state, thingsList: Array.prototype.splice.apply(state.thingsList, [0, action.payload.length].concat(action.payload))}
            default:
            return state;
    }
};