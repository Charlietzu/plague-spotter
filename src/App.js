import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import DataContext from './data/DataContext'
import MapManager from "./components/map/MapManager";
import { getWorldData } from './util/covid_api'
import countries from './data/countries.json'
import countriesDensity from './data/country-by-population-density.json'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {
  }

  componentWillMount(){
    getWorldData().then(json =>{
      this.setState({
        countriesJson:countries.countries[0],
        countriesDensity:countriesDensity,
        countriesCovid:json,
      })
    })
  }

  render(){
    return (
      <DataContext.Provider value={this.state}>
        <div style={{height:'100vh'}}>
          <Header />
          <Switch>
            <Route exact path="/" component={MapManager} />
            <Route exact path="/map" component={MapManager} />
            <Route exact path="/plague-spotter" component={MapManager} />
          </Switch>
        </div>
      </DataContext.Provider>
    );
  }
}

export default App;
