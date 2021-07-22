import ActionTypes from "../constants/action-types";

const initialState = {
    products : [],
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload}
        default:
            return state
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}

export const loadingStatus = (state = true, {type, payload}) => {
    switch (type) {
        case ActionTypes.LOADING_STATUS_TRUE:
            return payload
        case ActionTypes.LOADING_STATUS_FALSE:
            return payload
        default:
            return state
    }
}