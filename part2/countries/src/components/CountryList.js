import React from 'react';
import CountryDetails from './CountryDetails';
import Button from './Button';

const CountryList = ({ countries, filter, setFilter, weather }) => {
    const filteredList = countries.filter(
        country => 
        country.name.toLowerCase().includes(filter.toLowerCase()) === true
    )

    if (filter.length === 0) {
        return <div>Start typing to search for a country</div>
    } else if (filteredList.length > 10) {
        return <div>Too many matches, specify another filter</div>
    } else if (filteredList.length === 0) {
        return <div>No country was found, please try again</div>
    } else if (filteredList.length === 1) {
        return (
            <CountryDetails 
                filteredList={filteredList}
                setFilter={setFilter}
                weather={weather}
            />
        )
    } else
    return (
        <div>
            {filteredList.map(country => (
                <div key={country.index}>
                    {country.name}{" "}
                    <Button handleClick={() => setFilter(country.name)} text="show" />
                </div>
            ))}
        </div>
    )
}

export default CountryList