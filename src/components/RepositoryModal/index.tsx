import React, { useEffect, useState } from 'react';
import { FiAlertCircle, FiStar } from 'react-icons/fi';
import { CgGitFork } from 'react-icons/cg';

import Button from '../Button';

import { Container, Modal } from './styles';

interface RepositoryModalProps {
  handleClickOutsideModal(): void;
}

interface RepositoryProps {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

const user = {
  id: 144607915,
  name: 'rocketseat-vscode-reactjs-snippets',
  description: 'Rocketseat ReactJS snippets for Visual Studio Code Editor',
  stargazers_count: 1525,
  forks_count: 36,
  open_issues_count: 7,
};

const RepositoryModal: React.FC<RepositoryModalProps> = ({
  handleClickOutsideModal,
}) => {
  const [repository, setRepository] = useState<RepositoryProps>();

  useEffect(() => {
    async function loadRepositoryData(): Promise<void> {
      setRepository(user);
    }

    loadRepositoryData();
  }, []);

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
