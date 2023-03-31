import { createContext, useState } from "react"
import axios from 'axios'
import { Weather } from '../models/weatherData'


type weatherContextObj = {
    data: Partial<Weather>;
    city: string;
    loading: boolean;
    fetchData: (text: string) => void;
}

export const weatherContext = createContext<weatherContextObj>({
    data: {},
    city: '',
    loading: false,
    fetchData: () => {}
});

const WeatherContextProvider: React.FC = (props) => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState<Partial<Weather>>({});
    const [loading, setLoading] = useState(false);

    const fetchWeatherHandler = (text:string) => {
        setCity(text);
        setLoading(true);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`)
        .then(response => {
        setWeather(response.data);
        });
        setCity('');
        setLoading(false);
    }

    const contextValue: weatherContextObj = {
        data: weather,
        city: city,
        loading: loading,
        fetchData: fetchWeatherHandler 
    }

    return <weatherContext.Provider value={contextValue}>
        {props.children}
    </weatherContext.Provider>
}

export default WeatherContextProvider;