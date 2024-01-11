import {configureStore} from '@reduxjs/toolkit'
import ChatReducer from './Reducers/ChatReducer'
import ChangeFontSizeReducer from './Reducers/ChangeFontSizeReducer'
import CRUDProductReducer from './Reducers/CRUDProductReducer'
import ProductReducer from './Reducers/ProductReducer'

export const store = configureStore({
    reducer: {
        //các State của ứng dụng
        chatReducer: ChatReducer,
        changeFontSizeReducer: ChangeFontSizeReducer,
        crudProductReducer: CRUDProductReducer,
        productReducer: ProductReducer,
    }
})