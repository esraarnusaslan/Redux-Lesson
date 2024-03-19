import React from 'react';
import AppRouterProvider from './router';
import { useSelector } from 'react-redux';

const App = () => {
    const lang = useSelector((state) => state.locale.lang);
    return (
        <>
            <AppRouterProvider key={lang.code} />
        </>
    );
};

export default App;
