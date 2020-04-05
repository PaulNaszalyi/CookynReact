import {applyMiddleware, createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from '../reducers'
import thunk from "redux-thunk"
import logger from 'redux-logger'

const persistConfig = {
    key: 'cookyn',
    storage: storage,
    whitelist: ['cookyn', 'favorite', 'recipe', 'login', 'theme', 'language']
}
const pReducer = persistReducer(persistConfig, reducers)
const store = createStore(pReducer, applyMiddleware(logger, thunk))
const persistor = persistStore(store)
export {persistor, store}
