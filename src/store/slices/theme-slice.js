import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkMode: false,
    },
    reducers: {
        toggle: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
