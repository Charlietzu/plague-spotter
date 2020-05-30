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
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({ map, maps }) =>
            Object.entries(this.props.countriesData).map((country) => {
              let countries = country[1];
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
export default MapManager;
