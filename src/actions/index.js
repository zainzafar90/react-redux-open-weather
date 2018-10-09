
import axios from 'axios';

const API_KEY = 'd2fb6c29b15420e736cb304faf77a7a2';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
     return {
         type: FETCH_WEATHER,
         payload: request
     }
}