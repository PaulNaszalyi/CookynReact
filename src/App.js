import React from 'react';
import './App.css';
import Routes from './config/routes'
import {ThemeProvider} from 'styled-components'

import {Provider} from 'react-redux'
import {PersistGate} from "redux-persist/es/integration/react"
import {store, persistor} from './config/store'
import theme from './config/theme'

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={""}>
                <ThemeProvider theme={theme}>
                    <Routes/>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
