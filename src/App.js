import React from 'react';
import './App.css';
import Routes from './config/routes'

import {Provider} from 'react-redux'
import {store} from './config/store'

function App() {
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    );
}

export default App;
