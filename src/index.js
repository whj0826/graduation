import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/route';
import {store} from "./store/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <AppRoutes/>
      </Provider>
  </React.StrictMode>
);
