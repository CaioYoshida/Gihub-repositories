import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/globalStyle';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <GlobalStyle />
    <Routes />
  </Router>
);

export default App;
