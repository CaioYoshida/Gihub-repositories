import styled from 'styled-components';

import ButtonComponent from '../../components/Button';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  max-width: 400px;

  > img {
    margin-bottom: 25px;
    width: 100%;
    max-width: 400px;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  color: #c53030;

  margin-bottom: 5px;

  svg {
    margin-right: 5px;
  }
`;

export const Button = styled(ButtonComponent)`
  margin-top: 25px;
`;
