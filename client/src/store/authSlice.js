import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name : 'auth',
    initialState : {
        isLogged : false
    },
    reducers : {
        login :(state,action) => {
           state.isLogged = true;
        },
        logout : (state,action) => {
            state.isLogged = false;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice;