import {createSlice} from '@reduxjs/toolkit';

const badgeSlice = createSlice({
    name : 'cart',
    initialState : { badgeItem : 0},
    reducers : {
        addtoCart(state){
            state.badgeItem = state.badgeItem + 1;
        },
        removetoCart(state)
        {
            state.badgeItem = state.badgeItem - 1;
        }
    }
})

export const badgeActions = badgeSlice.actions;
export default badgeSlice;