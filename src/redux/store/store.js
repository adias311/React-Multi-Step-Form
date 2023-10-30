import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
import rootReducer from '../persist/persistReducer';

const store = configureStore({
  reducer: rootReducer,
  // Konfigurasi lain seperti middleware, enhancer, dsb.
});
const persistor = persistStore(store);

export { store, persistor };
