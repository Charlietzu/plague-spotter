import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import renderMarker from "./Marker";
import DataOverlay from "./DataOverlay.js";
import { getWorldData } from '../../util/covid_api'

var countriesData = require("../../data/countries.json");
const API_KEY = "AIzaSyDEZBGmstNOX29tWnSVv_Auy3U-mRgmAfY";

class MapManager extends Component {
  static defaultProps = {
    center: {
      lat: -15.76972,
      lng: -47.92972,
    },
    zoom: 11,
    countriesData: countriesData.countries[0],
  };

  state = {
    showDataDetails:false,
    country:undefined
  }

  iterateTest() {
    let countriesJSON = {};
    let countriesAPI = {};

    Object.entries(this.props.countriesData).map((country) => {
      let countriesJSONAux= {}
      countriesJSONAux[country[0]] = country[1];
      countriesJSON = Object.assign(countriesJSON, countriesJSONAux);
    });

    getWorldData().then((json) => {
      Object.entries(json).map((countryAPI) => {
        countriesAPI[countryAPI[1].country] = countryAPI[1];
      });
    });

    console.log(countriesJSON);
    console.log(countriesAPI);
  }

  showDataDetails = (country) => {
    this.setState({
      showDataDetails:true, 
      country
    })
  }

  render() {
    this.iterateTest()
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) =>
            Object.entries(this.props.countriesData).map((country) => {
              let countries = country[1];
              renderMarker(
                map,
                maps,
                Number(countries.latitude),
                Number(countries.longitude),
                countries.name,
                this.showDataDetails
              );
            })
          }
        />

        <DataOverlay 
        show={this.state.showDataDetails} 
        country={this.state.country}
        />
      </div>
    );
  }
}
export default MapManager;
