import React, { Component } from "react";
import "./DataOverlay.css";
import { Button } from "react-bootstrap";
import DataContext from '../../data/DataContext'

export class DataOverlay extends Component {
  static contextType = DataContext

  state = {
    show: false,
    haveData: true,
  };
  
  hide = () => {
    this.setState({
      show: false,
    });
  };

  componentWillReceiveProps(newProps) {
    if (newProps.show !== this.state.show) {
      this.setState({ show: newProps.show, country: newProps.country });
      this.getData(newProps.country, (data) => {
        if (data === false) return;

        let { infected, tested, recovered, deceased } = data;

        this.setState({
          show: newProps.show,
          country: newProps.country,
          infected,
          tested,
          recovered,
          deceased,
        });
      });
    }
  }

  getData(country, callback) {
    let world = this.context.countriesCovid;
    
    let countryObj = world.filter((data) => data.country === country)[0];

    if (!countryObj) {
      this.setState({ haveData: false });
    } else {
      this.setState({ haveData: true });
    }

    if (countryObj) callback(countryObj);
  }

  showCovidData() {
    if (this.state.haveData) {
      return (
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
      );
    } else {
      return (
        <div className="ml-3">
          <p>Sorry, we still don't have this data. :(</p>
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
