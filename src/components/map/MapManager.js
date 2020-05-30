import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
const API_KEY = "AIzaSyDEZBGmstNOX29tWnSVv_Auy3U-mRgmAfY";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapManager extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: {
        lat: 59.955413,
        lng: 30.337844,
      },
      map,
      title: "Hello World!",
    });
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapManager;
