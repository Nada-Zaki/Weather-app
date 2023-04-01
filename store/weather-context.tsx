import { createContext, useState } from "react"
import axios from 'axios'
import { Weather } from '../models/weatherData'


type weatherContextObj = {
    data: Partial<Weather>;
    loading: boolean;
    error: string;
    fetchData: (text: string) => void;
}

export const weatherContext = createContext<weatherContextObj>({
    data: {},
    loading: false,
    error: '',
    fetchData: () => {}
});

const WeatherContextProvider: React.FC = (props) => {
    const [weather, setWeather] = useState<Partial<Weather>>({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchWeatherHandler = (text:string) => {
        setLoading(true);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`)
        .then(response => {
            setWeather(response.data);
            setLoading(false);
            setError('');
        }).catch(error => {
            setError(error.message);
            setLoading(false);
            setWeather({});
        });  
    }

    const contextValue: weatherContextObj = {
        data: weather,
        loading: loading,
        error: error,
        fetchData: fetchWeatherHandler 
    }

    return <weatherContext.Provider value={contextValue}>
        {props.children}
    </weatherContext.Provider>
}

export default WeatherContextProvider;