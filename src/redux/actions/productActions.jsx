import ActionTypes from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}

export const loadingStatusTrue = () => {
    return {
        type: ActionTypes.LOADING_STATUS_TRUE,
        payload: true
    }
}

export const loadingStatusFalse = () => {
    return {
        type: ActionTypes.LOADING_STATUS_FALSE,
        payload: false
    }
}