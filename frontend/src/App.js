// src/App.js
import React from "react";
import NavBar from "./components/navbar/NavBar.jsx";
import MobileList from "./components/mobiles/index.js";
// importing css

function App() {
  return (
    <div className="App">
      <NavBar />
      <MobileList />

    </div>
  );
}

export default App;
