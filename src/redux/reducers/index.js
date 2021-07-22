import {combineReducers} from "redux"
import { productReducer, selectedProductReducer, loadingStatus } from "./productReducer"

const reducers = combineReducers({
    allProducts : productReducer,
    product: selectedProductReducer,
    loading : loadingStatus
})

export default reducers