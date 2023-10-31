import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Tambahkan import Provider
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
