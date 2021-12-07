import { combineReducers } from 'redux'
import { ProductReducer } from './ProductReducers'

const Reducers = combineReducers({
    allProducts: ProductReducer
})

export default Reducers