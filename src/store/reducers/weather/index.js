import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    weatherData: {},
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialState,
  reducers: {
    updateWeatherdata: (state, action) => {
      state.weatherData = action.payload;
    },
  },
});

const { 
    reducer,
    actions: {
        updateWeatherdata
    }
 } = weatherSlice;
const selectorWeather = (state) => state.weather;

export { updateWeatherdata, selectorWeather };
export default reducer;