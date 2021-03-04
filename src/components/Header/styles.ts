import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  width: 100%;
  padding: 0 10px;
  background-color: #fff;
  position: fixed;
  top: 0;

  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    height: 50px;
    margin-right: 10px;
  }
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 250px;

  button {
    border: none;
    background-color: transparent;
    color: #c53030;

    display: flex;
    align-items: center;

    span {
      margin-left: 5px;
      font-weight: 700;
      font-size: 16px;
    }
  }

  > div {
    display: flex;
    align-items: center;

    span {
      margin-right: 10px;
      font-weight: 500;
      font-size: 16px;
    }

    > img {
      height: 44px;
      border-radius: 22px;
      border: 2px solid #c4c4c4;
    }
  }

  @media (max-width: 500px) {
    justify-content: flex-end;
    > div {
      display: none;
    }
  }
`;
