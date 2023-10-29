import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import formSlice from '../actions/formSlice';

const persistConfig = {
  key: 'stepForm',
  storage, 
  whitelist: ['formSlice'], 
};

const rootReducer = combineReducers({
  formSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
