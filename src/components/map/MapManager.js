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

  render() {
    return (
      // Important! Always set the container height explicitly
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    );
  }
}

export default MapManager;
