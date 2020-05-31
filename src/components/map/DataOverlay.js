import React, { Component } from "react";
import "./DataOverlay.css";
import { Button } from "react-bootstrap";
import DataContext from "../../data/DataContext";

export class DataOverlay extends Component {
  static contextType = DataContext;

  state = {
    show: false,
    haveData: true,
  };

  hide = () => {
    this.setState({
      show: false,
    });
  };

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.show !== this.state.show) {
      this.setState({ show: newProps.show, country: newProps.country });
      this.getData(newProps.country, (data) => {
        if (data === false) return;

        let { infected, tested, recovered, deceased, density } = data;

        if (density == null) density = "N/A";

        this.setState({
          show: newProps.show,
          country: newProps.country,
          infected,
          tested,
          recovered,
          deceased,
          density,
        });
      });
    }
  }

  getData(country, callback) {
    let world = this.context.countriesCovid;
    let worldDensity = this.context.countriesDensity;

    let countryObj = world.filter((data) => data.country === country)[0];
    let countryDensity = worldDensity.filter(
      (data) => data.country === country
    )[0];

    if (!countryObj) {
      this.setState({ haveData: false });
    } else {
      countryObj = Object.assign(countryObj, countryDensity);
      this.setState({ haveData: true });
    }

    if (countryObj) callback(countryObj);
  }

  showCovidData() {
    if (this.state.haveData) {
      return (
        <div className="data-body">
          <div className="font-weight-bold">Pop. Density:</div>
          <div>{this.state.density}</div>
          <div className="font-weight-bold">Tested: </div>
          <div>{this.state.tested}</div>
          <div className="font-weight-bold">Infected: </div>
          <div>{this.state.infected}</div>
          <div className="font-weight-bold">Deaths: </div>
          <div>{this.state.deceased}</div>
          <div className="font-weight-bold">Recovered: </div>
          <div>{this.state.recovered}</div>
        </div>
      );
    } else {
      return (
        <div className="ml-3">
          <p className="font-weight-bold">
            Sorry, we still don't have this data. :(
          </p>
        </div>
      );
    }
  }

  render() {
    let show = this.state.show;

    if (show) {
      return (
        <div className="data-wrapper">
          <div className="data-container">
            <div className="data-header">
              <h1> Covid-19 data in {this.state.country} </h1>
            </div>

            {this.showCovidData()}

            <div className="data-footer">
              <Button onClick={this.hide}>Exit</Button>
            </div>
          </div>
        </div>
      );
    } else {
      return "";
    }
  }
}

export default DataOverlay;
