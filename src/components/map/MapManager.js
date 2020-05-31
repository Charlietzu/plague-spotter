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
    return (
      <div style={{ height: windowH, width: "100%" }}>
        <DataContext.Consumer>
          { value => {
              return(
                <GoogleMapReact
                  bootstrapURLKeys={{ key: API_KEY }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                  yesIWantToUseGoogleMapApiInternals={true}
                  onGoogleApiLoaded={({ map, maps }) => {
                    if(value.countriesJson !== undefined)
                      Object.entries(value.countriesJson).map((country) => {
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
              )
            }
          }
        </DataContext.Consumer>

        <DataOverlay
          show={this.state.showDataDetails}
          country={this.state.country}
        />
      </div>
    );
  }
}
export default MapManager;
