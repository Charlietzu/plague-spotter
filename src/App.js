import React from "react";
import "./App.css";
import MapManager from "./components/map/MapManager";
import Header from "./components/common/Header";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <Switch>
        <Route exact path="/" component={MapManager} />
        <Route exact path="/map" component={MapManager} />
        <Route exact path="/plague-spotter" component={MapManager} />
      </Switch>
    </div>
  );
}

export default App;
