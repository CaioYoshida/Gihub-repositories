import React, { useState, useCallback, useEffect } from 'react';
import { FiGithub, FiSearch } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useSelector, DefaultRootState, useDispatch } from 'react-redux';

import api from '../../services/api';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { searchUser } from '../../store/modules/auth/actions';

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

interface ReduxStateProps extends DefaultRootState {
  login?: string;
  password?: string;
  searchUser?: string;
}

const Dashboard: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const data: ReduxStateProps = useSelector(state => state);

  const [userInput, setUserInput] = useState('');
  const [userData, setUserData] = useState<UserProps>();

  const [inputError, setInputError] = useState(false);

  const handleSearchButton = useCallback(() => {
    if (userInput === '') {
      setInputError(true);
    } else {
      dispatch(searchUser(userInput));
    }
  }, [userInput, dispatch]);

  useEffect(() => {
    async function loadUserData(): Promise<void> {
      if (data.searchUser) {
        const response = await api.get(data.searchUser);

        setUserData(response.data);
      }
    }

    loadUserData();
  }, [data.searchUser]);

  return (
    <Container>
      <Header />
      <SearchUserContainer>
        <span>Entre com o nome de um usuário cadastrado no Github</span>
        <div>
          <Input
            isErrored={inputError}
            placeholder="Busca de um usuário"
            defaultValue={userInput}
            onChange={item => setUserInput(item.target.value)}
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
            onClick={() => history.push(`/repositories/${data.searchUser}`)}
          >
            Ver repositórios
          </Button>
        </UserInformationContainer>
      )}
    </Container>
  );
};

export default Dashboard;
