import {
    ADD_THING_VIEW,
    ADD_THING,
    SHOW_CURRENT_THING,
    CHANGE_SELECTED_DAYS,
    EDIT_THING_VIEW,
    PUSH_EDITED_THING,
    DELETE_THING,
    SET_TAB_VIEW,
    SET_GRID_LIST_VIEW
} from "./types";

export const addThingView = (isVisible) => {
    return {type: ADD_THING_VIEW, payload: isVisible}
}

export const addThing = (array, thing) => {
    array.unshift(thing)
    return {type: ADD_THING, payload: array}
}

export const showCurrentThing = (thing) => {
    return {type: SHOW_CURRENT_THING, payload: thing}
}

export const changeSelectedDays = (things) => ({type: CHANGE_SELECTED_DAYS, payload: things})

export const editThingView = (isVisible) => {
    return {type: EDIT_THING_VIEW, payload: isVisible}
}

export const pushEditedThing = (array, id, thing) => {
    array.splice(id, 1, thing)
    return {type: PUSH_EDITED_THING, payload: array}
}

export const deleteThing = (array, id) => {
    array.splice(id, 1)
    return {type: DELETE_THING, payload: array}
}

export const setTabView = (code) => {
    return {type: SET_TAB_VIEW, payload: code}
}

export const setGridListView = (code) => {
    return {type: SET_GRID_LIST_VIEW, payload: code}
}