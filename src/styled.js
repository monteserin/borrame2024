import styled from "styled-components";

export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ visible }) => (visible ? "flex" : "none")};
  div {
    width: 50%;
    height: 50%;
    background-color: white;
    margin: 0 auto;
    margin-top: 10%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const CharacterImg = styled.img`
  max-width: 50px;
`;
