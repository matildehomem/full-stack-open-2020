import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryWeather = ({ capital }) => {
  const [weather, setWeather] = useState({});
  const [fetched, setFetched] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = 'http://api.weatherstack.com';
  const urlFinal = `${baseUrl}/current?access_key=${apiKey}&query=${capital}`;

  useEffect(() => {
    axios.get(urlFinal).then((response) => {
      setFetched(true);
      setWeather({
        temperature: response.data.current.temperature,
        icon: response.data.current.weather_icons[0],
        windSpeed: response.data.current.wind_speed,
        windDirection: response.data.current.wind_dir,
      });
    });
  }, [urlFinal]);

  if (fetched) {
    return (
      <div>
        <h2>Weather in {capital}</h2>
        <p>temperature: {weather.temperature} Celsius</p>
        <img src={weather.icon} alt="icon" />
        <p>
          <b>wind: </b>
          {weather.windSpeed}mph direction {weather.windDirection}
        </p>
      </div>
    );
  } else return null;
};

export default CountryWeather;
