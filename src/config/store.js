import {applyMiddleware, createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from '../reducers'
import thunk from "redux-thunk"
import logger from 'redux-logger'

const persistConfig = {
    key: 'favorites',
    storage: storage,
    whitelist: ['favorite'] // On indique le reducer qu'on souhaite stocker
}
const pReducer = persistReducer(persistConfig, reducers)
const store = createStore(pReducer, applyMiddleware(logger, thunk))
const persistor = persistStore(store)
export {persistor, store}
