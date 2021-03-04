import React from 'react';
import { FiAlertCircle, FiStar } from 'react-icons/fi';
import { CgGitFork } from 'react-icons/cg';

import Button from '../Button';

import { Container, Modal } from './styles';

export interface RepositoryProps {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

interface RepositoryModalProps {
  handleClickOutsideModal(): void;
  repository: RepositoryProps;
}

const RepositoryModal: React.FC<RepositoryModalProps> = ({
  handleClickOutsideModal,
  repository,
}) => {
  return (
    <>
      {repository && (
        <Container onClick={handleClickOutsideModal}>
          <Modal>
            <h3>{repository.name}</h3>
            <span>{repository.description}</span>

            <main>
              <div>
                <FiStar size={25} />
                <strong>{repository.stargazers_count}</strong>
              </div>

              <div>
                <CgGitFork size={25} />
                <strong>{repository.forks_count}</strong>
              </div>

              <div>
                <FiAlertCircle size={25} />
                <strong>{repository.open_issues_count}</strong>
              </div>
            </main>

            <Button>Ver reposiório</Button>
          </Modal>
        </Container>
      )}
    </>
  );
};

export default RepositoryModal;
