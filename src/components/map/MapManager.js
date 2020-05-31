import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import renderMarker from "./Marker";
import DataOverlay from "./DataOverlay.js";
import DataContext from '../../data/DataContext'
const API_KEY = "AIzaSyDEZBGmstNOX29tWnSVv_Auy3U-mRgmAfY";

class MapManager extends Component {
  static defaultProps = {
    center: {
      lat: -15.76972,
      lng: -47.92972,
    },
    zoom: 0
  };
  static contextType = DataContext
  
  state = {
    showDataDetails: false,
    country: undefined,
  };

  showDataDetails = (country) => {
    this.setState({
      showDataDetails: true,
      country,
    });
  };

  render() {
    const windowH = window.innerHeight -56
    const countriesLatLong = this.context.countriesJson
    return (
      <div style={{ height: windowH, width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) => {
            if(countriesLatLong !== undefined)
              Object.entries(countriesLatLong).map((country) => {
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
