import React from 'react';

import GlobalStyle from './styles/globalStyle';

// import SignIn from './pages/SignIn';
// import Dashboard from './pages/Dashboard';
import Repositories from './pages/Repositories';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Repositories />
  </>
);

export default App;
