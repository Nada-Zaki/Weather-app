import React from 'react'
import { useContext } from 'react'
import { weatherContext } from '../store/weather-context'

const WeatherData: React.FC = () => {
  const weatherCtx = useContext(weatherContext);
  
  return (
    <div>WeatherData</div>
  )
}

export default WeatherData