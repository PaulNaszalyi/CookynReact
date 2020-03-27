import React from 'react';
import './App.css';
import Routes from './config/routes'
import {ThemeProvider} from 'styled-components'

import {Provider} from 'react-redux'
import {store} from './config/store'
import theme from './config/theme'

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Routes/>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
