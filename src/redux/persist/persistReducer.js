import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage  from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session'
import formSlice from '../actions/formSlice';

const persistConfig = {
  key: 'formSlice',
  storage : storageSession, 
  whitelist: ['formSlice'], 
};

const rootReducer = combineReducers({
  formSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;


// import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import storageSession from 'redux-persist/lib/storage/session'
// import formSlice from '../actions/formSlice';
// import stepSlice from '../actions/stepSlice';

// const persistConfig = {
//   key: 'formSlice',
//   storage, // Menggunakan storage untuk penyimpanan reguler
//   whitelist: ['formSlice'],
// };

// const persistConfigStep = {
//   key: 'stepSlice',
//   storage, // Menggunakan sessionStorage untuk penyimpanan sesi
//   whitelist: ['stepSlice'],
// };

// const rootReducer = combineReducers({
//   formSlice,
//   stepSlice,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const persistedStepReducer = persistReducer(persistConfigStep, rootReducer);

// export { persistedReducer, persistedStepReducer };
// export default rootReducer;

