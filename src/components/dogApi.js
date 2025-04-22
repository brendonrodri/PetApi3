import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
const Img = styled.img`
  width: 40vw;
  height: 60vh;
  margin: 50px;
  border-radius: 10px;
  box-shadow: 1px 2px 1px 2px rgba(0, 0, 0, 0.7);
  @media (max-width: 720px) {
    width: 80vw;
    height: 27vh;
    border-radius: 10px;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  button {
    width: 10vw;
    height: 5vh;
    margin: 25px;
    background-color: #836fff;
    color: #fff;
    font-size: 1.2em;
    border: none;
    border-radius: 15px;
    box-shadow: 1px 2px 1px 2px rgba(0, 0, 0, 0.7);
  }
  @media (max-width: 720px) {
    button {
      width: 50vw;
    }
  }
`;
const DogApi = () => {
  const [dog, setDog] = useState([]);
  useEffect(() => {
    DogList();
  }, []);
  function DogList() {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((response) => {
      setDog(response.data.message);
    });
  }
  return (
    <>
      <ImgContainer>
        <button
          onClick={() => {
            DogList();
          }}
        >
          Novo Dog
        </button>
        <Img src={dog} alt="foto de um cachorro" />
      </ImgContainer>
    </>
  );
};
export default DogApi;
