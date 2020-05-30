import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import renderMarker from "./Marker";
var countriesData = require("../../data/countries.json");

const API_KEY = "AIzaSyDEZBGmstNOX29tWnSVv_Auy3U-mRgmAfY";

class MapManager extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
    countriesData: countriesData.countries[0],
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      /*
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({ map, maps }) => renderMarker(map, maps)}
        ></GoogleMapReact>
        */

      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({ map, maps }) =>
            Object.entries(this.props.countriesData).map((country) => {
              let countries = country[1];
              console.log(countries);
              renderMarker(
                map,
                maps,
                Number(countries.latitude),
                Number(countries.longitude),
                countries.name
              );
            })
          }
        ></GoogleMapReact>
      </div>
    );
  }
}
/*this.props.countries.map((country) => {
              renderMarker(
                map,
                maps,
                country.lat,
                country.lng,
                country.country
              );
            }) */
export default MapManager;
