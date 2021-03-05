import React, { useState, useCallback } from 'react';
import { FiUser, FiMail, FiAlertCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';

import logoImg from '../../assets/logo.svg';

import { Container, LoginContainer, ErrorMessage, Button } from './styles';

const SignIn: React.FC = () => {
  const history = useHistory();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const [loginError, setLoginError] = useState(false);

  const handleEnterButton = useCallback(() => {
    if (user === 'admin' && password === 'senha') {
      console.log('entrou');
      setLoginError(false);

      history.push('/dashboard');
    } else {
      setLoginError(true);
    }
  }, [user, password, history]);

  return (
    <Container>
      <LoginContainer>
        <img src={logoImg} alt="github-repositories" />

        {loginError && (
          <ErrorMessage>
            <FiAlertCircle size={20} />
            <span>Usuário e/ou senha inválidos. Tente novamente!</span>
          </ErrorMessage>
        )}
        <Input
          icon={FiUser}
          isErrored={loginError}
          defaultValue={user}
          onChange={item => setUser(item.target.value)}
          placeholder="Nome usuário"
        />
        <Input
          icon={FiMail}
          isErrored={loginError}
          defaultValue={password}
          onChange={item => setPassword(item.target.value)}
          placeholder="Senha"
          type="password"
        />

        <Button type="button" onClick={handleEnterButton}>
          Entrar
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default SignIn;
