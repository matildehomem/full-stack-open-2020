import React from 'react';
import CountryWeather from './CountryWeather'

function Countries ({ countries, changeCountryFiltered }) {
    
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length <= 10 && countries.length > 1) {
    return (
      <ul>
        {countries.map((country, i) => (
          <li key={i}> {country.name} <button onClick={()=>changeCountryFiltered(country.name)}>show</button></li>
        ))}
      </ul>
    );
  } else if (countries.length === 1) {
    return (
      <div>
        <h2>{countries[0].name} </h2>
        <p>Capital: {countries[0].capital}</p>
        <p>Population: {countries[0].population}</p>

        <h3>Languages</h3>
        <ul>
          {countries[0].languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>

        <img
          src={countries[0].flag}
          alt={countries[0].name}
          width="150px"
        />
        <CountryWeather capital={countries[0].capital}/>
      </div>
    );
  } else return null
};

export default Countries;
