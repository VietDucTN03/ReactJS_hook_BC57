import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { TOKEN, USER_LOGIN, http } from '../../util/config';

//Xử lý load giá trị ban đầu cho state từ storage(localstorage)
let userLoginDefault = {
    email: '',
    accessToken: ''
}
if (localStorage.getItem(USER_LOGIN)) {  // Nếu userLogin có tồn tại
    userLoginDefault = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    userProfile: {

    },
    userLogin: userLoginDefault  // Xét giá trị mặc định
}

const UserReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        loginAction: (state, action) => {
            state.userLogin = action.payload
        },
        getProfileAction: (state, action) => {
            state.userProfile = action.payload
        }

    }
});

export const { loginAction, getProfileAction } = UserReducer.actions

export default UserReducer.reducer

//-------------------action thunk-------------------
export const loginApiAction = (userLogin) => {

    return async (dispatch) => {
        try {
            //call api
            const res = await http.post('/Users/signin', userLogin);

            //Sau khi lấy được token thì lưu vào local storage
            localStorage.setItem(TOKEN, res.data.content.accessToken);
            localStorage.setItem(USER_LOGIN, JSON.stringify(res.data.content));
            
            //Gửi dữ liệu sau khi thành công vào reducer
            const action = loginAction(res.data.content)
            dispatch(action)
        }catch (err) {
            console.log({err})
            console.log(err.response?.data)
            console.log(err.request)
            console.log(err.response?.statusCode)
            // if(err.response?.data?.statusCode == 404) {
            //     alert('Tài khoản mật khẩu không đúng!')
            //     window.location.href = '/';
            // }
        }

    }
}
export const getProfileApiAction = () => {
    return async (dispatch) => {
        const res = await http.post('/Users/getProfile');

        //Sau khi có được dữ liệu thì dispatch lên reducer
        const action = getProfileAction(res.data.content)
        dispatch(action)
    }
}