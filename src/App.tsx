import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/globalStyle';

import Routes from './routes';

import { store, persistor } from './store';

const App: React.FC = () => (
  <Router>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>

    <GlobalStyle />
  </Router>
);

export default App;
