import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Countries from './components/Countries'
import SearchCountry from './components/SearchCountry'

function App() {
  const [countries, setCountries] = useState([]);
  const [countryToFilter, setCountryToFilter] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilter = (e) => {
    setCountryToFilter(e.target.value);
  };
  const changeCountryFiltered = filter => {
    setCountryToFilter(filter)
  }

  const countriesFiltered = countryToFilter
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(countryToFilter.toLowerCase()),
      )
    : countries;

  return (
    <div>
      <SearchCountry countryToFilter={countryToFilter} handleFilter={handleFilter}/>
      <Countries countries={countriesFiltered} changeCountryFiltered={changeCountryFiltered}/>
     
    </div>
  );
}

export default App;
