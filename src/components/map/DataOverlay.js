import React, { Component } from "react";
import "./DataOverlay.css";
import { getWorldData } from "../../util/covid_api";
import { Button } from "react-bootstrap";

export class DataOverlay extends Component {
  state = {
    show: false,
  };
  hide = () => {
    this.setState({
      show: false,
    });
  };

  componentWillReceiveProps(newProps) {
    if (newProps.show !== this.state.show) {
      this.getData(newProps.country, (data) => {
        if (data === false) return;

        let { infected, tested, recovered, deceased } = data;

        this.setState({
          infected,
          tested,
          recovered,
          deceased,
          show: newProps.show,
          country: newProps.country,
        });
      });
    }
  }

  async getData(country, callback) {
    let world = await getWorldData();
    let countryObj = world.filter((data) => data.country === country)[0];

    if (countryObj) callback(countryObj);
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

            <div className="data-body">
              <div>Tested: </div>
              <div>{this.state.tested}</div>
              <div>Infected: </div>
              <div>{this.state.infected}</div>
              <div>Deaths: </div>
              <div>{this.state.deceased}</div>
              <div>Recovered: </div>
              <div>{this.state.recovered}</div>
            </div>

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
