import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: -50,
  };

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDEZBGmstNOX29tWnSVv_Auy3U-mRgmAfY" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default Map;
