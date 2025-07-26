import "./Weather.css";
import searchIcon from "../assets/search.png";
import clearIcon from "../assets/clear.png";
import cloudIcon from "../assets/cloud.png";
import drizzleIcon from "../assets/drizzle.png";
import humidityIcon from "../assets/humidity.png";
import rainIcon from "../assets/rain.png";
import snowIcon from "../assets/snow.png";
import windIcon from "../assets/wind.png";
import { useEffect, useRef, useState } from "react";

export default function Weather() {
    const [weatherData, setWeatherData] = useState(false);
    const inputRef = useRef();
    const allIcons = {
        "01d": clearIcon,
        "01n": clearIcon,
        "02d": cloudIcon,
        "02n": cloudIcon,
        "03d": cloudIcon,
        "03n": cloudIcon,
        "04d": drizzleIcon,
        "04n": drizzleIcon,
        "09d": rainIcon,
        "09n": rainIcon,
        "10d": rainIcon,
        "10n": rainIcon,
        "13d": snowIcon,
        "13n": snowIcon,
    };

    async function search(city) {
        if (city.trim() === "") {
            alert("Enter city name");
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
                import.meta.env.VITE_APP_ID
            }&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            
            if(!response.ok){
                alert(data.message)
                return;
            }

            const icon = allIcons[data.weather[0].icon] || clearIcon;
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temprature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon,
            });
        } catch (error) {
            setWeatherData(false)
            console.error('error in fetching weather data')
        }
    }

    return (
        <div className="weather">
            <div className="search-bar">
                <input type="text" placeholder="City Name" ref={inputRef} onKeyDown={()=>{
                    if(event.key==='Enter'){
                        search(inputRef.current.value)
                    }
                }}/>
                <img
                    src={searchIcon}
                    alt=""
                    onClick={() => {
                        search(inputRef.current.value);
                    }}
                />
            </div>
            {weatherData ? (
                <>
                    <img src={weatherData.icon} alt="" className="weather" />
                    <p className="temprature">{weatherData.temprature}°C</p>
                    <p className="location">{weatherData.location}</p>
                    <div className="weather-data">
                        <div className="col">
                            <img src={humidityIcon} alt="" />
                            <div>
                                <p>{weatherData.humidity} %</p>
                                <span>Humidity</span>
                            </div>
                        </div>
                        <div className="col">
                            <img src={windIcon} alt="" />
                            <div>
                                <p>{weatherData.windSpeed} KM/h</p>
                                <span>Wind Speed</span>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
}
