import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </div>
        </Provider>
    );
};

export default App;
