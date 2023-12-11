import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrayComment: [
        {name: 'abc', content: 'hello BC57'},
        {name: 'xyz', content: 'hello Trương Nguyễn Việt Đức'}
    ],

    userComment: {
        name: 'default name',
        content: 'default value'
    }
}

const ChatReducer = createSlice({
  name: 'ChatReducer',
  initialState,
  reducers: {
    updateUserCommentAction: (state, action) => {
      const {id, value} = action.payload;
      state.userComment[id] = value;
      console.log(action);
    },

    addUserCommentAction: (state, action) => {
      const {payload} = action;
      console.log('action submit', action);
      state.arrayComment.push(payload)
    }
  }
});

export const {updateUserCommentAction, addUserCommentAction} = ChatReducer.actions

export default ChatReducer.reducer