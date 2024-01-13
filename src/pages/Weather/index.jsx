import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import WeatherIcon from "../../assets/images/weather-icon.png";
import Sunset from "../../assets/images/weather-2.jpeg";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import axios from "axios";
import "./weather.css";
import { useDispatch, useSelector } from "react-redux";
import {updateWeatherdata, selectorWeather} from '../../store/reducers/weather'
const Weather = () => {
  const dispatch = useDispatch();
  const { weatherData } = useSelector(selectorWeather)
  const [searchPlace, setSearchPlace] = useState("");
 

  const handleSearchInputChange = (value) => {
    setSearchPlace(value);
    console.log("searchPlace", searchPlace);
  };

  const getData = async () => {
    const apiKey = "bfde554bff123c44cc3cf7a20f450723";

    const result = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchPlace}&appid=${apiKey}&units=metric`
      )
      .then((data) => {
        console.log("Success:", data);

        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      dispatch(updateWeatherdata(result.data))
    console.log("resut", result);
  };

  return (
    <div className="weather-app-wrapper">
      <div className="search-field">
        <Typography gutterBottom variant="h5" component="div">
          Welcome to the Weather App
        </Typography>
        <Box m={4}>
          <TextField
            label="Enter a place"
            value={searchPlace}
            onChange={(event) => handleSearchInputChange(event.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="contained" onClick={() => getData()}>
                    Search
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </div>
      {weatherData && (
        <div className="display-result">
          <Card
            className="test"
            sx={{
              maxWidth: 345,
              backgroundImage: Sunset,
              opacity: 0.6,
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {weatherData?.name}
              </Typography>
              <Typography gutterBottom variant="subtitle2" component="div">
                29/04/2023 Sat 14:50
              </Typography>
              <CardMedia
                component="img"
                height="140"
                image={WeatherIcon}
                alt="green iguana"
              />
              <Typography variant="h4" color="text.secondary">
                17
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                6 22
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Right now in -----, it is mostly cloudy
              </Typography>
              <Divider variant="middle" />
              <Typography gutterBottom variant="h5" component="div">
                Weekly forecast
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
export default Weather;

//search button inside text field
//background image in card
//size of the card
//footer going up
