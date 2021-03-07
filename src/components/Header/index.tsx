import React from 'react';
import { useSelector, DefaultRootState, useDispatch } from 'react-redux';
import { FiLogOut } from 'react-icons/fi';

import { signOut } from '../../store/modules/auth/actions';

import { Container, SideMenu } from './styles';

interface ReduxStateProps extends DefaultRootState {
  login?: string;
  password?: string;
  searchUser?: string;
}

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const data: ReduxStateProps = useSelector(state => state);

  return (
    <Container>
      <img src="https://i.imgur.com/acbFfn9.png" alt="github-repositories" />

      <SideMenu>
        <button type="button" onClick={() => dispatch(signOut())}>
          <FiLogOut size={20} />
          <span>Sair</span>
        </button>

        <div>
          <span>{`Olá, ${data.login}`}</span>
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
