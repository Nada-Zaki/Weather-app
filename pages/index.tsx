import { useContext } from 'react'
import { weatherContext } from '../store/weather-context'
import BackgroundImg from '../components/BackgroundImg'
import SearchForm from '../components/SearchForm'
import WeatherData from '../components/WeatherData'



export default function Home() {
  const weatherCtx = useContext(weatherContext);

  return (
    <>
      <BackgroundImg />
      <div className='container text-center'>
        <SearchForm />
        {weatherCtx.loading && <div className='spinner-border'></div>}
        {Object.keys(weatherCtx.data).length !== 0 && <WeatherData />}
      </div>  
    </>
  )
}
