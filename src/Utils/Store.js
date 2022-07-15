import { configureStore } from '@reduxjs/toolkit';
const { createSlice } = require('@reduxjs/toolkit');
const blogSlice = createSlice({
    name: 'Blogs',
    initialState: {},
    reducers: {
        upDate(state, action) {
            // state.push(action.payload);
        state[0]=action.payload;
     // state.isEdit=!state.isEdit
        },
        
    },
});
const store = configureStore({

    reducer: blogSlice.reducer,

});
export const { upDate } = blogSlice.actions;

export default store;