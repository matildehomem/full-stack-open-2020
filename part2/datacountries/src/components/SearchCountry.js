import React from 'react';

const SearchCountry = ({countryToFilter, handleFilter}) => {
    return (
        <div>
            find countries <input value={countryToFilter} onChange={handleFilter} />
        </div>
    );
};

export default SearchCountry;