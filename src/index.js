import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'antd/dist/antd.css';

import App from './components/App'
import GlobalStyle from './styles';
import store from './store';
import LayoutProvider from './contexts/LayoutContext';

ReactDOM.render(
  <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <LayoutProvider>
          <App />
        </LayoutProvider>
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
