import React, { useState, useCallback, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';

import api from '../../services/api';

import Header from '../../components/Header';
import RepositoryModal, {
  RepositoryProps,
} from '../../components/RepositoryModal';

import { UserProps } from '../Dashboard';

import {
  Container,
  RepositoriesListContainer,
  PersonalInformationContainer,
  RepositoriesView,
  PaginationContainer,
} from './styles';

interface Param {
  user: string;
}

interface MatchTypes {
  params: Param;
}

const Repositories: React.FC = () => {
  const match: MatchTypes = useRouteMatch();

  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(5);
  const [showRepositoryModal, setShowRepositoryModal] = useState(false);
  const [user, setUser] = useState<UserProps>();
  const [repository, setRepository] = useState<RepositoryProps>();
  const [repositoriesList, setRepositoriesList] = useState<
    Array<RepositoryProps>
  >([]);

  useEffect(() => {
    async function loadRepositoriesData(): Promise<void> {
      const { data: repositoriesData } = await api.get(
        `${match.params.user}/repos?per_page=5&page=${page}`,
      );
      const { data: userData } = await api.get(`${match.params.user}`);

      setRepositoriesList(repositoriesData);
      setUser(userData);
      setNumberOfPages(Math.ceil(userData.public_repos / 5));
    }

    loadRepositoriesData();
  }, [page, match.params.user]);

  const handleNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const handlePreviousPage = useCallback(() => {
    if (page >= 2) {
      setPage(page - 1);
    }
  }, [page]);

  const handleClickRepository = useCallback(data => {
    setRepository(data);
    setShowRepositoryModal(true);
  }, []);

  const handleClickOutsideModal = useCallback(() => {
    setShowRepositoryModal(false);
  }, []);

  return (
    <Container>
      <Header />

      {showRepositoryModal && repository && (
        <RepositoryModal
          handleClickOutsideModal={handleClickOutsideModal}
          repository={repository}
        />
      )}

      <RepositoriesListContainer>
        {user && (
          <PersonalInformationContainer>
            <img src={user.avatar_url} alt={user.login} />

            <div>
              <strong>
                <FiGithub size={14} />
                <span>{user.login}</span>
              </strong>

              <h3>{user.name}</h3>

              <p>{user.bio}</p>
            </div>
          </PersonalInformationContainer>
        )}

        <strong>Lista de repositórios</strong>

        <RepositoriesView>
          {repositoriesList &&
            repositoriesList.map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleClickRepository(item)}
              >
                <strong>{item.name}</strong>

                <span>{item.description}</span>
              </button>
            ))}
        </RepositoriesView>

        <PaginationContainer>
          {page >= 2 && (
            <button type="button" onClick={handlePreviousPage}>
              anterior
            </button>
          )}

          <strong>{page}</strong>

          {page < numberOfPages && (
            <button type="button" onClick={handleNextPage}>
              próxima
            </button>
          )}
        </PaginationContainer>
      </RepositoriesListContainer>
    </Container>
  );
};

export default Repositories;
