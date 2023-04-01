import React, { Fragment } from 'react'
import BackgroundImg from '../components/BackgroundImg'
import SearchForm from '../components/SearchForm'
import { useContext } from 'react'
import { weatherContext } from '../store/weather-context'
import WeatherData from '../components/WeatherData'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorNotification from '../components/ErrorNotification'


export default function Home() {
  const weatherCtx = useContext(weatherContext);

  if(weatherCtx.loading) {
      return (
          <LoadingSpinner />
      )
  }
  
  return (
    <Fragment>
      <BackgroundImg />
      <div className='container text-center'>
        <SearchForm />
        {weatherCtx.error && <ErrorNotification text={weatherCtx.error} />}
        {weatherCtx.data && !weatherCtx.error && <WeatherData />}
      </div>  
    </Fragment>
  )
}
