import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
  background-color: #e5e5e5;

  @media (max-width: 900px) {
    padding: 0 20px;
  }
`;

export const RepositoriesListContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 900px;

  margin-top: 90px;
  margin-left: 10px;
  margin-right: 10px;

  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > strong {
    margin-top: 25px;
    font-size: 26px;
    font-weight: 900;
    color: #2764bf;
  }

  @media (max-width: 600px) {
    align-items: center;

    padding: 20px;
  }
`;

export const PersonalInformationContainer = styled.div`
  display: flex;
  flex-direction: row;

  img {
    height: 100px;
    border-radius: 50px;

    border: 4px solid #bbb;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 30px;

    strong {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #333;

      > svg {
        margin-right: 5px;
      }
    }

    h3 {
      margin-top: 10px;
      font-size: 20px;
      font-weight: 500;
    }

    p {
      margin-top: 10px;
      color: #555;
      font-weight: 300;
      font-style: italic;
    }
  }

  @media (max-width: 600px) {
    > div {
      margin-top: 20px;
      margin-left: 30px;
      align-items: center;

      p {
        display: none;
      }
    }
  }
`;

export const RepositoriesView = styled.div`
  width: 100%;
  margin-top: 20px;

  > button {
    height: 60px;
    border: none;
    background-color: #d9e8fe;
    border-radius: 8px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 8px;

    & + button {
      margin-top: 15px;
    }

    strong {
      color: #2764bf;
      font-size: 18px;
    }

    span {
      margin-top: 5px;

      color: #427dd6;
      font-style: italic;
    }
  }

  @media (max-width: 600px) {
    > button {
      width: 100%;

      span {
        display: none;
      }
    }
  }
`;

export const PaginationContainer = styled.div`
  margin-top: 25px;
  align-self: center;

  button {
    border: none;
    background-color: transparent;

    font-weight: 500;
    color: #777;
  }

  strong {
    margin: 0 15px;
  }
`;
