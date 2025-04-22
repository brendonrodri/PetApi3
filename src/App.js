import React from "react";
import CatApi from "./components/catApi";
import DogApi from "./components/dogApi";
import HeaderComponent from "./components/Header";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      {HeaderComponent()}
      {DogApi()}
      {CatApi()}
    </div>
  );
}
