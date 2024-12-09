import React, { useEffect, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modifyWeatherInfo} from '../utils/storeManagement';
import { API_TOMORROW } from '../utils/apiKeys';

const WeatherForecast = () => {

    const [storeManagement] = useRecoilState(modifyWeatherInfo);

    const [hourForecast , setHourForecast] = useState([]); // means fpr next 24 hour temp forecast

    async function getWeatherForecast()
    {
        try{
            let res = await fetch(` ${API_TOMORROW.base}?location=${storeManagement?.coord?.lat || "28.6128"},${storeManagement?.coord?.lon || "77.2311"}&fields=${API_TOMORROW.fields}&timesteps=1d,1h&units=metric&apikey=${API_TOMORROW.key}`);
            let data = await res.json();

            if(data?.data?.timelines){
                let findInterval =data?.data?.timelines.find(val => val.timestep === "1h").intervals;

                let data24Hour = findInterval.slice(0,24).map(val=>{
                    return{
                        time: new Date(val.startTime).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          }),
                        temp: Math.round(val.values.temperature),
                    }
                });
                setHourForecast(data24Hour);
            }
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getWeatherForecast();
    },[storeManagement?.coord?.lat]);

    return (
        (storeManagement?.coord?.lat) && (
        <>
            <p className='next24hour-text'>24 Hour Temperature Forecast</p>
            <div className='swipe'>Swipe left or right</div>
            <div className='main-block'>
            {
                hourForecast.length ? hourForecast.map(val => (
                    <div key={val?.time} className='inside-block'>
                        <div className='time'>{val.time}</div>
                        <div className='temp'>{val.temp} °C</div>
                    </div>
                )) : <p className='loading-msg'>Loading...</p>
            }
            </div>
        </>
        )
    )
}

export default WeatherForecast
