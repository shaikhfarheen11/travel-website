import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import App from './App';
import store from './Components/store/store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}> {/* Wrap the app with Provider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
