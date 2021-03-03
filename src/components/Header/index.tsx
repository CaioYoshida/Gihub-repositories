import React from 'react';
import { FiLogOut } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, SideMenu } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="github-repositories" />

      <SideMenu>
        <button type="button">
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
