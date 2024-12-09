
import searchImg from "../images/search.png";
import clear from "../images/clear.png";
import cloud from "../images/cloud.png";
import drizzle from "../images/drizzle.png";
import humidity from "../images/humidity.png";
import rain from "../images/rain.png";
import snow from "../images/snow.png";
import wind from "../images/wind.png";

import { iconMapping } from "../utils/iconsList";
import unknown from "../icons/unknown.png";

import { useEffect, useState } from "react";
import { OPEN_WEATHER_URL, openWeatherKey} from "../utils/apiKeys";
import { useRecoilState} from "recoil";
import { weatherInfo } from "../utils/storeManagement";
import { dateTime } from "../utils/date";



const WeatherPage = ()=>{

    const [cityName, setCityName] = useState("New Delhi");
    const [weatherData, setWeatherData] = useState(false);
    const [isLoading , setIsLoading] = useState(true);

    const [storeManagement , setStoreManagement] = useRecoilState(weatherInfo); 

    async function getWeatherData()
    {
        try {
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName || "New Delhi"}&units=metric&appid=${openWeatherKey}`);
            let data = await res.json();

            if(Object.keys(data).length){
                setIsLoading(false);
                setWeatherData(data);
                setStoreManagement(data);
               
            }else{
                setWeatherData(data);
                setStoreManagement(data);
            }
        }
        catch(err)
        {
            setIsLoading(false);
            setWeatherData(false);
            // console.log(err);
        }
    }

    function handleData()
    {
        getWeatherData();
    }

    function handleCityChange(e)
    {
        let city = e.target.value;
        setCityName(city.charAt(0).toUpperCase() + city.slice(1).toLowerCase())
        // setCityName()
    }

    useEffect(()=>{
        getWeatherData();
    },[]);

    return(
        <div className={`main-container $`}>
            <div className="search-bar">
                <input type="text" value={cityName} placeholder="Search City" onChange={handleCityChange} />
                <img src={searchImg} alt="search" onClick={handleData} />
            </div>
            {
                isLoading ? <p className="loading-msg">Loading...</p> : (weatherData?.name) ? 
                <>
                <div className="date-time">{dateTime}</div>
                <img src={iconMapping[weatherData?.weather[0].icon] || unknown} className="weather-icon" />
                <p className="location">{weatherData.name} , {weatherData?.sys?.country}</p>
                <p className="temp-box">{Math.floor(weatherData?.main?.temp || 0)} °C</p>
                <p className="description">{weatherData?.weather[0]?.description}</p>
                <div className="weather-data">
                    <div className="col">
                        <img src={humidity} />
                        <div>
                            <p>{weatherData?.main?.humidity} %</p>
                            <span>Humidity</span>
                        </div>
                    </div>   
                    <div className="col">
                        <img src={wind} />
                        <div>
                            <p>{weatherData?.wind?.speed} km/h</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>               
                </div>
                </>
                : (weatherData?.cod == "404") 
                ? <p className="error">Opps!! Search City Not Found</p> 
                : <p className="error">Error Loading Data</p>
            }
        </div>
    )
};

export default WeatherPage;