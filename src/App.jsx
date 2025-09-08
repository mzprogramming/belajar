import { useState } from "react";
import cat from "./assets/picture/cat.png";
import Header from "./Layouts/Header.jsx";
import Identity from "./Layouts/Identity.jsx";
import Biodata from "./Layouts/Biodata.jsx";
import HighLight from "./Layouts/HighLight.jsx";

import "./App.css";


function App() {
  return (
    <>
      <div className="card">
        <div className="top" style={{ backgroundImage: `url(${cat})` }}>
          <Header />
          <Identity />
        </div>
        <div className="bottom">
          <Biodata />
          <HighLight />
        </div>
      </div>
    </>
  );
}






export default App;
