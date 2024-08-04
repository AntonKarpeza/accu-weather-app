import { createSlice } from '@reduxjs/toolkit';

const unitToggleSlice = createSlice({
    name: 'unitToggle',
    initialState: {
        isCelsius: true,
    },
    reducers: {
        toggleUnit: (state) => {
            state.isCelsius = !state.isCelsius;
        },
    },
});

export const { toggleUnit } = unitToggleSlice.actions;
export default unitToggleSlice.reducer;