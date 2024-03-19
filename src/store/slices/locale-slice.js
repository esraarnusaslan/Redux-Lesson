import { createSlice } from "@reduxjs/toolkit";


const localeSlice = createSlice({
    name: "locale",
    initialState:{
        lang: { name: "English", code: "en", country: "gb" },
        currency: "usd"
    },
    reducers:{
        changeLang: (state, action) => {
            state.lang = action.payload
        }
    }
})

export const { changeLang } = localeSlice.actions;
export default localeSlice.reducer;