import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

export default class App extends Component {
  render() {
    return (
      <div>
          <div className="page-header page-header-dark">

            <div className="page-header-content header-elements-md-inline">
              <div className="page-title d-flex">
                <h4>Weather App</h4>
              </div>

              <div className="header-elements bg-transparent border-0 mb-3 mb-md-0">
                <SearchBar/>
              </div>
            </div>

          </div>


          <div className="page-content">

            <div className="content-wrapper">

              <div className="content">

                <div className="card">
                  <div className="card-header header-elements-inline">
                    <h5 className="card-title">Weather Forecast - Day Wise</h5>
                  </div>

                  <div className="card-body">
                     <WeatherList/>
                  </div>
                </div>

              </div>

            </div>

          </div>
      </div>
    );
  }
}
