import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        location: "",
    },
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload;
        },
    },
});

export const { setLocation } = searchSlice.actions;
export default searchSlice.reducer;