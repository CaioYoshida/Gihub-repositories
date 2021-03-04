import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`;

export const Modal = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;

  h3 {
    font-size: 22px;
    color: #2764bf;
    margin-bottom: 10px;
  }

  span {
    color: #888;
    font-style: italic;
  }

  main {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }

  div {
    margin-top: 20px;
    display: flex;
    align-items: center;

    strong {
      margin-left: 5px;
      font-size: 25px;
      color: #2764bf;
    }
  }

  button {
    margin-top: 20px;
  }
`;
