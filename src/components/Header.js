import React from "react";
import styled from "styled-components";
const Header = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #836fff;
  color: #fff;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
  h1 {
    padding: 5px;
  }
  @media (max-width: 720px) {
    height: 15vh;
  }
`;
export default function HeaderComponent() {
  return (
    <Header>
      <h1>Click no botão para outra surpresa </h1>
    </Header>
  );
}
