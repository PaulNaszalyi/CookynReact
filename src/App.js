import React from 'react';
import './App.css';
import Routes from './config/routes'

import {Provider} from 'react-redux'
import {PersistGate} from "redux-persist/es/integration/react"
import {store, persistor} from './config/store'

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <Routes/>
            </PersistGate>
        </Provider>
    );
}

export default App
