import React from 'react'

const Weather = ({ weather, capital }) => {
  if (typeof weather == "undefined") {
    return <h3>No weather data found</h3>
  } else console.log("temperature", capital, weather.temperature)

  return (
    <div>
      <h2>Weather in {capital}</h2>

      <div>
        <b>temperature: </b>
        {weather.temperature} Celsius
      </div>
      <img
        width="75"
        height="75"
        src={weather.weather_icons}
        alt="weather icon"
      />
      <div>
        <b>wind:</b> {weather.wind_speed} kph direction {weather.wind_dir}
      </div>
    </div>
  )
}

export default Weather