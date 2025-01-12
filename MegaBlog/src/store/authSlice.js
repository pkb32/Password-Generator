import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    status: false,
    userData: null

};

const authSlice = createSlice({ 
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },

        logout: (state) => {
            state.status = false;
            state.userData = null;
        },

    }
});

export const {login, logout} = authSlice.actions; //authSLice bhitare jou login and logout lekhinu na tanku sabu actions kuha jae, tu seita hi export karuchu
export default authSlice.reducer;