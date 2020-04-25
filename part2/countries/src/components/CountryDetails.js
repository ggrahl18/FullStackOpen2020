import React from 'react'
import Languages from './Languages'
import Button from './Button'
import Weather from './Weather'

const CountryDetails = ({ filteredList, setFilter, weather }) => {
    const country = filteredList.map(country => country.name)
    const capital = filteredList.map(country => country.capital)
    const population = filteredList.map(country => country.population)
    const flag = filteredList.map(country => country.flag)

    return (
        <div>
            <Button handleClick={() => setFilter('')} text='reset' />
            <h2>{country}</h2>
            <div>
                <b>Capital: </b>
                {capital}
            </div>
            <div>
                <b>Population</b>
                {population}
            </div>
            <h3>Languages</h3>
            <div>
                <Languages languages={filteredList} />
            </div>
            <img width="150" height="100" src={flag} alt={country} />
            <Weather weather={weather} capital={capital} />
        </div>
    )
};

export default CountryDetails