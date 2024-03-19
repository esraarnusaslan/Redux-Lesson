import React from 'react';
import About from '../components/about';
import Properties from '../components/properties';

const HomePage = () => {
    return (
        <div>
            <Properties />
            <div style={{ height: '100px' }}></div>
            <About />
            <div style={{ height: '100px' }}></div>
        </div>
    );
};

export default HomePage;
