import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './slices/theme-slice';
import localeSlice from './slices/locale-slice';

export default configureStore({
    reducer: {
        theme: themeSlice,
        locale: localeSlice,
    },
});
