import React from 'react';

const Countries = ({ countriesFiltered }) => {
  if (countriesFiltered.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countriesFiltered.length <= 10 && countriesFiltered.length > 1) {
    return (
      <ul>
        {countriesFiltered.map((country, i) => (
          <li key={i}> {country.name}</li>
        ))}
      </ul>
    );
  } else if (countriesFiltered.length === 1) {
    return (
      <div>
        <h2>{countriesFiltered[0].name} </h2>
        <p>Capital: {countriesFiltered[0].capital}</p>
        <p>Population: {countriesFiltered[0].population}</p>

        <h3>Languages</h3>
        <ul>
          {countriesFiltered[0].languages.map((language) => (
            <li>{language.name}</li>
          ))}
        </ul>

        <img
          src={countriesFiltered[0].flag}
          alt={countriesFiltered[0].name}
          width="150px"
        />
      </div>
    );
  } else return null
};

export default Countries;
