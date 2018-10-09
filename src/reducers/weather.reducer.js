const FETCH_WEATHER = 'FETCH_WEATHER';


export function WeatherReducer(state = [], action ) {

    switch (action.type) {
        case FETCH_WEATHER:
            return [...state, action.payload.data];
        default:
            return state;
    }
}