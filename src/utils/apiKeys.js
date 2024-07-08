
// below one is from open weather platform

export const openWeatherKey= process.env.REACT_APP_OPEN_WEATHER_KEY;
export const   OPEN_WEATHER_URL = `api.openweathermap.org/data/2.5/forecast?lat=40.7143&lon=-74.006&appid=${openWeatherKey}`;

// tomorrow io

export const API_TOMORROW = {
    base : "https://api.tomorrow.io/v4/timelines",
    key : process.env.REACT_APP_TOMORROW_KEY,
    fields :"temperature,weatherCode,windSpeed,rainIntensity,snowDepth,sunriseTime,sunsetTime,cloudCover",
};

// let TOMORROW_KEY = process.env.REACT_APP_TOMORROW_KEY;
// export const TOMORROW_URL = `https://api.tomorrow.io/v4/weather/forecast?location=78.474, 13.3753&apikey=${TOMORROW_KEY}`; 








// export const OPEN_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${openWeatherKey}`;										   
											

// 'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=Q7CmuG9E7fxhgBo99FqQMAMLsvkkQKZb'


// {
//     "data": {
//       "timelines": [
//         {
//           "timestep": "1h",
//           "endTime": "2024-07-08T12:00:00Z",
//           "startTime": "2024-07-08T06:00:00Z",
//           "intervals": [
//             {
//               "startTime": "2024-07-08T06:00:00Z",
//               "values": {
//                 "temperature": 21.63
//               }
//             },
//             {
//               "startTime": "2024-07-08T07:00:00Z",
//               "values": {
//                 "temperature": 21.99
//               }
//             },
//             {
//               "startTime": "2024-07-08T08:00:00Z",
//               "values": {
//                 "temperature": 21.5
//               }
//             },
//             {
//               "startTime": "2024-07-08T09:00:00Z",
//               "values": {
//                 "temperature": 21.5
//               }
//             },
//             {
//               "startTime": "2024-07-08T10:00:00Z",
//               "values": {
//                 "temperature": 21.22
//               }
//             },
//             {
//               "startTime": "2024-07-08T11:00:00Z",
//               "values": {
//                 "temperature": 22.49
//               }
//             },
//             {
//               "startTime": "2024-07-08T12:00:00Z",
//               "values": {
//                 "temperature": 23.7
//               }
//             }
//           ]
//         }
//       ]
//     }
//   }