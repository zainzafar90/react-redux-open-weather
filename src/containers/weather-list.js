import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChartJS  from '../components/chart';
import GoogleMaps from '../components/google-maps';

class WeatherList extends Component {
    
    renderWeather(cityData) {
        const city = cityData.city.name;
        const temperature = cityData.list.map( weather => weather.main.temp);
        const humidity = cityData.list.map( weather => weather.main.humidity);
        const pressure = cityData.list.map( weather => weather.main.pressure);
        const {lat, lon} = cityData.city.coord;

        return (
            <tr key={city}>
                <td>{city}</td>
                <td className="map">
                    <GoogleMaps lat={lat} lon={lon}/>
                </td>
                <td>
                   <ChartJS data={temperature} color="red"/>
                </td>
                <td>
                    <ChartJS data={humidity} color="blue"/>
                </td>
                <td>
                    <ChartJS data={pressure} color="green"/>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <div className="table-responsive table-hover">
                <table className="table">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Map</th>
                            <th>Temprature</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        );
    }
}


function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);