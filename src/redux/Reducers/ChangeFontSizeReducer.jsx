import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fSize: 16
}

const ChangeFontSizeReducer = createSlice({
  name: 'ChangeFontSizeReducer',
  initialState,
  reducers: {
    changeFontSizeAction: (state, action) => {
        const {payload} = action;
        state.fSize += payload; 
    }
  }
});

export const {changeFontSizeAction} = ChangeFontSizeReducer.actions

export default ChangeFontSizeReducer.reducer