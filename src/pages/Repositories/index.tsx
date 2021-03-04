import React, { useState, useCallback } from 'react';
import { FiGithub } from 'react-icons/fi';

import Header from '../../components/Header';
import RepositoryModal from '../../components/RepositoryModal';

import {
  Container,
  RepositoriesListContainer,
  PersonalInformationContainer,
  RepositoriesView,
  PaginationContainer,
} from './styles';

const repositories = [
  {
    id: 1,
    name: 'gaearon/6t05',
    description:
      'Turn ES6+ code into readable vanille ES5 with source maps and more',
  },
  {
    id: 2,
    name: 'gaearon/6t05',
    description:
      'Turn ES6+ code into readable vanille ES5 with source maps and more',
  },
  {
    id: 3,
    name: 'gaearon/6t05',
    description:
      'Turn ES6+ code into readable vanille ES5 with source maps and more',
  },
  {
    id: 4,
    name: 'gaearon/6t05',
    description:
      'Turn ES6+ code into readable vanille ES5 with source maps and more',
  },
  {
    id: 5,
    name: 'gaearon/6t05',
    description:
      'Turn ES6+ code into readable vanille ES5 with source maps and more',
  },
];

const Repositories: React.FC = () => {
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(5);
  const [showRepositoryModal, setShowRepositoryModal] = useState(false);

  const handleNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const handlePreviousPage = useCallback(() => {
    if (page >= 2) {
      setPage(page - 1);
    }
  }, [page]);

  const handleClickRepostory = useCallback(() => {
    setShowRepositoryModal(true);
  }, []);

  const handleClickOutsideModal = useCallback(() => {
    setShowRepositoryModal(false);
  }, []);

  return (
    <Container>
      <Header />

      {showRepositoryModal && (
        <RepositoryModal handleClickOutsideModal={handleClickOutsideModal} />
      )}

      <RepositoriesListContainer>
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

        <strong>Lista de repositórios</strong>

        <RepositoriesView>
          {repositories &&
            repositories.map(repository => (
              <button
                key={repository.id}
                type="button"
                onClick={handleClickRepostory}
              >
                <strong>{repository.name}</strong>

                <span>{repository.description}</span>
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
