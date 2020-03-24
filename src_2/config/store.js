import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from '../reducers'

const persistConfig = {
  key: 'counter',
  storage: storage,
  whitelist: ['counter'] // On indique le reducer qu'on souhaite stocker
}
const pReducer = persistReducer(persistConfig, reducers)
const store = createStore(pReducer)
const persistor = persistStore(store)
export { persistor, store }
