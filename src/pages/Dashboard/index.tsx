import React, { useState } from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState('');

  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Dashboard;
