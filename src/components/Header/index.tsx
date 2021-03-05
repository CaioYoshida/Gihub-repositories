import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Container, SideMenu } from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <img src={logoImg} alt="github-repositories" />

      <SideMenu>
        <button type="button" onClick={() => history.push('/')}>
          <FiLogOut size={20} />
          <span>Sair</span>
        </button>

        <div>
          <span>Olá, Fulano</span>
          <img
            src="https://avatars.githubusercontent.com/u/810438?v=4"
            alt="Fulano"
          />
        </div>
      </SideMenu>
    </Container>
  );
};

export default Header;
