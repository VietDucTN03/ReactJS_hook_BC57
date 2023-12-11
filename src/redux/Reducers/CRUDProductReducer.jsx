import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrProduct: [], //State của table, payding lên table
    productInfo: {  //Payding lên form
        id: '',
        name: '',
        price: ''
    }

}

const CRUDProductReducer = createSlice({
  name: 'CRUDProductReducer',
  initialState,
  reducers: {
    handleInputProductAction: (state, action) => {
        const {id, value} = action.payload;
        state.productInfo[id] = value;
    }
  }
});

export const {handleInputProductAction} = CRUDProductReducer.actions

export default CRUDProductReducer.reducer