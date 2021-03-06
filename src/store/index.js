import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore } from 'redux';

import authReducer from './modules/auth/reducer';

const persistConfig = {
  key: '@github-repositories',
  storage,
  blacklist: 'auth'
};

const store = createStore(persistReducer(persistConfig, authReducer));
const persistor = persistStore(store);

export { store, persistor };
