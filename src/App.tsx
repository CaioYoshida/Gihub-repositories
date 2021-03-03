import React from 'react';

import GlobalStyle from './styles/globalStyle';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Dashboard />
  </>
);

export default App;
