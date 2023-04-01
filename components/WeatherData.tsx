import React from 'react'
import Image from 'next/image'
import { useContext } from 'react'
import { weatherContext } from '../store/weather-context'

const WeatherData: React.FC = () => {
  const weatherCtx = useContext(weatherContext);

  return (
    <>
      {weatherCtx.data && weatherCtx.data.weather &&
       <div className='container text-white d-flex flex-column justify-content-center align-items-center' style={{height:'80vh'}}>
        <h1>{weatherCtx.data.name}</h1>
        <div className='d-flex align-items-center my-2'>
          <Image src={`https://openweathermap.org/img/wn/${weatherCtx.data.weather[0].icon}@2x.png`} width="40px" height="40px" alt='weather icon' />
          <h2 className='mt-1 h4'>{weatherCtx.data.weather[0].main}</h2>
        </div>
        <h2 className='mb-3'>{weatherCtx.data.main!.temp.toFixed()} °C</h2>
        <div className='d-flex flex-column flex-md-row'>
          <div className='bg-dark text-center rounded m-2 px-4 py-1' style={{opacity:'0.8'}}>
            <h3 className='h6'>Humidity</h3>
            <h4>{weatherCtx.data.main!.humidity.toFixed()} %</h4>
          </div>
          <div className='text-nowrap bg-dark text-center rounded m-2 px-4 py-1' style={{opacity:'0.8'}}>
            <h3 className='h6'>Wind</h3>
            <h4>{weatherCtx.data.wind!.speed.toFixed()} km/h</h4>
          </div>
          <div className='bg-dark text-center rounded m-2 px-4 py-1' style={{opacity:'0.8'}}>
            <h3 className='text-nowrap h6 '>Feels Like</h3>
            <h4>{weatherCtx.data.main!.feels_like.toFixed()} °C</h4>
          </div>
        </div>
      </div>}
    </>
    
  )
}

export default WeatherData