import React, { useState, useCallback, useEffect } from 'react';
import { FiGithub, FiSearch } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

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

export interface UserProps {
  id: number;
  avatar_url: string;
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

const Dashboard: React.FC = () => {
  const history = useHistory();

  const [user, setUser] = useState('caioyoshida');
  const [userData, setUserData] = useState<UserProps>();
  const [searchTrigger, setSearchTrigger] = useState(false);

  const [inputError, setInputError] = useState(false);

  const handleSearchButton = useCallback(() => {
    if (user === '') {
      setInputError(true);
    } else {
      setSearchTrigger(!searchTrigger);
    }
  }, [user, searchTrigger]);

  useEffect(() => {
    async function loadUserData(): Promise<void> {
      const response = await api.get(user);

      setUserData(response.data);
    }

    loadUserData();
  }, [searchTrigger]);

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

      {userData && (
        <UserInformationContainer>
          <PersonalInformationContainer>
            <img src={userData.avatar_url} alt={userData.login} />

            <div>
              <strong>
                <FiGithub size={14} />
                <span>{userData.login}</span>
              </strong>

              <h3>{userData.name}</h3>

              <p>{userData.bio}</p>
            </div>
          </PersonalInformationContainer>

          <GithubInformationContainer>
            <div>
              <span>Repositórios</span>
              <strong>{userData.public_repos}</strong>
            </div>

            <div>
              <span>Seguidores</span>
              <strong>{userData.followers}</strong>
            </div>

            <div>
              <span>Seguindo</span>
              <strong>{userData.following}</strong>
            </div>
          </GithubInformationContainer>

          <Button
            type="button"
            onClick={() => history.push(`/repositories/${user}`)}
          >
            Ver repositórios
          </Button>
        </UserInformationContainer>
      )}
    </Container>
  );
};

export default Dashboard;
