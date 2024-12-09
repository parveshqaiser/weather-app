

import { atom, selector } from "recoil";

export const weatherInfo = atom({
    key : "weatherInfo",
    default : {}
});

export const modifyWeatherInfo = selector({
    key : "modifyWeatherInfo",
    get : ({get}) => {
        return get (weatherInfo)
    },
    set : ({set} , newValue)=>{
        set (weatherInfo, newValue)
    }
});