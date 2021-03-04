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

export const SearchUserContainer = styled.div`
  margin-top: 90px;
  margin-left: 10px;
  margin-right: 10px;

  width: 100%;
  max-width: 900px;

  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > span {
    font-weight: 500;
  }

  > div {
    display: flex;
    flex-direction: row;

    margin-top: 10px;

    button {
      width: 100%;
      max-width: 80px;

      margin-left: 10px;

      svg {
        display: none;
      }
    }
  }

  @media (max-width: 400px) {
    > div {
      button {
        svg {
          display: block;
        }

        span {
          display: none;
        }
      }
    }
  }
`;

export const UserInformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 900px;

  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;

  background-color: #fff;
  padding: 50px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  button {
    width: 100%;
    max-width: 600px;
    align-self: center;

    margin-top: 30px;
  }

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const PersonalInformationContainer = styled.div`
  display: flex;
  flex-direction: row;

  img {
    height: 180px;
    border-radius: 90px;

    border: 6px solid #bbb;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 60px;

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
    flex-direction: column;
    align-items: center;

    img {
      height: 200px;
      width: 200px;
      border-radius: 100px;
    }

    > div {
      margin-top: 20px;
      margin-left: 0px;
      align-items: center;
    }
  }
`;

export const GithubInformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 40px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 26px;
      font-weight: 700;
      color: #333;
    }

    strong {
      font-size: 40px;
      color: #2764bf;
      margin-top: 20px;
    }
  }

  @media (max-width: 500px) {
    > div {
      span {
        font-size: 18px;
      }

      strong {
        margin-top: 10px;
        font-size: 26px;
      }
    }
  }
`;
