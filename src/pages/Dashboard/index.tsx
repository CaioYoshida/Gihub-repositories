import React, { useState, useCallback } from 'react';
import { FiGithub, FiSearch } from 'react-icons/fi';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  SearchUserContainer,
  UserInformationContainer,
  PersonalInformationContainer,
  GithubInformationContainer,
} from './styles';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState('');

  const [inputError, setInputError] = useState(false);

  const handleSearchButton = useCallback(() => {
    if (user === '') {
      setInputError(true);
    }
  }, [user]);

  return (
    <Container>
      <Header />
      <SearchUserContainer>
        <span>Entre com o nome de um usuário cadastrado no Github</span>
        <div>
          <Input
            isErrored={inputError}
            placeholder="Busca de um usuário"
            defaultValue={user}
            onChange={item => setUser(item.target.value)}
          />
          <Button type="button" onClick={handleSearchButton}>
            <FiSearch size={18} />
            <span>Buscar</span>
          </Button>
        </div>
      </SearchUserContainer>

      <UserInformationContainer>
        <PersonalInformationContainer>
          <img
            src="https://avatars.githubusercontent.com/u/810438?v=4"
            alt="fulano"
          />

          <div>
            <strong>
              <FiGithub size={14} />
              <span>jandrade</span>
            </strong>

            <h3>João de Andrade</h3>

            <p>
              I am full-stack developer focused in JS. Always studying to
              increase my programming skills and very excited about new
              challenges
            </p>
          </div>
        </PersonalInformationContainer>

        <GithubInformationContainer>
          <div>
            <span>Repositórios</span>
            <strong>248</strong>
          </div>

          <div>
            <span>Seguidores</span>
            <strong>6425</strong>
          </div>

          <div>
            <span>Seguindo</span>
            <strong>171</strong>
          </div>
        </GithubInformationContainer>

        <Button>Ver repositórios</Button>
      </UserInformationContainer>
    </Container>
  );
};

export default Dashboard;
