import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import WeatherPage from "./components/Weather";
import WeatherForecast from "./components/WeatherForecast";
import { RecoilRoot } from "recoil";

let root = ReactDOM.createRoot(document.getElementById("root"));

const App = ()=>{

    const [backgroundColor, setBackgroundColor] = useState("");

    useEffect(()=>{
        handleBackgroundColor();
    },[])

    function handleBackgroundColor()
    {
        let hours = new Date().getHours();

        let bgClass = '';

        if (hours >= 5 && hours < 12) {
            bgClass = 'morning';
        } else if (hours >= 12 && hours < 17) {
            bgClass = 'afternoon';
        } else if (hours >= 17 && hours < 20) {
            bgClass = 'evening';
        } else {
            bgClass = 'night';
        }
        setBackgroundColor(bgClass);
    }

    return(
        <div className={`app ${backgroundColor}`}>
            <WeatherPage />
            <WeatherForecast />
        </div>        
    )
}

root.render(
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>
);