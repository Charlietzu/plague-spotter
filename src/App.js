import React from "react";
import "./App.css";
import MapManager from "./components/map/MapManager";
import Header from "./components/common/Header";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={MapManager} />
        {/*INSERIR ROTA PARA A PÁGINA ABOUT AQUI */}
      </Switch>
    </div>
  );
}

export default App;
