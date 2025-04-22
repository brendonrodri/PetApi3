import React, { useState, useEffect } from "react";
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
const CatApi = () => {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    CatList();
  }, []);
  function CatList() {
    axios.get("https://api.thecatapi.com/v1/images/search").then((response) => {
      console.log(response.data);
      setCat(response.data);
    });
  }
  return (
    <>
      <ImgContainer>
        <button
          onClick={() => {
            CatList();
          }}
        >
          Novo Gato
        </button>
        {cat.map((item) => (
          <li>
            <Img src={item.url} />
          </li>
        ))}
      </ImgContainer>
    </>
  );
};
export default CatApi;
