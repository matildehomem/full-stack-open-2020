import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([]);
  const [countryToFilter, setCountryToFilter] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountries(response.data);
      console.log(response.data);
      
    });
  }, []);

  const handleFilter = (e) => {
    setCountryToFilter(e.target.value);
  };

  const countriesFiltered = countryToFilter
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(countryToFilter.toLowerCase()),
      )
    : countries;

  return (
    <div>
      find countries <input value={countryToFilter} onChange={handleFilter} />
      <Countries countriesFiltered={countriesFiltered} />
     
    </div>
  );
}

export default App;
