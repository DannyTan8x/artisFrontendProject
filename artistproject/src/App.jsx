import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import MyCard from "./components/MyCard";
import projectLogo from "./assets/LOGO11.png";
function App() {
  // const projectLogo = "../assets/LOGO11.png";
  return (
    <>
      <NavBar></NavBar>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Artis Project</h1>
      <MyCard photo={projectLogo} altText="photo alt text" />
    </>
  );
}

export default App;