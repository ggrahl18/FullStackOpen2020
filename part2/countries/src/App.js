
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'
import Filter from './components/Filter'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState('')

  const weatherAPI =
    "http://api.weatherstack.com/current?access_key=2ad568c72e5276bbe497b94bb79e71d2&query=";

  const getCapital = () => {
    const filteredList = countries.filter(
      country =>
      country.name.toLowerCase().includes(filter.toLowerCase()) === true
    )

    let capital = filteredList.map(country => country.capital);
    if (capital.length === 1) {
      return weatherAPI + capital.toString();
    } else return "http://api.weatherstack.com/current";
  };

  const capital = getCapital();

  useEffect(() => {
    axios.get(weatherAPI + capital).then(response => {
      setWeather(response.data);
    });
  }, [capital]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  const handleFilterChange = event => {
    console.log(event.target.value)
    setFilter(event.target.value);
  }

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <CountryList
        countries={countries}
        filter={filter}
        setFilter={setFilter}
        weather={weather.current}
      />
    </div>
  )
}

export default App
