import { configureStore } from "@reduxjs/toolkit";

import { persistStore } from 'redux-persist';

import rootReducer from '../persist/persistReducer';

const store = configureStore(rootReducer);
const persistor = persistStore(store);

export { store, persistor };


