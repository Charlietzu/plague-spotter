import React from "react";
import "./App.css";
import MapManager from "./components/map/MapManager";
import CountryData from "./components/map/CountryData";


function App() {
  return (
    <div className="App">
      <MapManager />
      <CountryData />
    </div>
  );
}

export default App;
