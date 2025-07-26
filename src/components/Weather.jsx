import './Weather.css'
import searchIcon from '../assets/search.png'
import clearIcon from '../assets/clear.png'
import cloudIcon from '../assets/cloud.png'
import dizzleIcon from '../assets/drizzle.png'
import humidityIcon from '../assets/humidity.png'
import rainIcon from '../assets/rain.png'
import snowIcon from '../assets/snow.png'
import windIcon from '../assets/wind.png'

export default function Weather(){
    return(
        <div className="weather">
            <div className="search-bar">
                <input type="text" placeholder='City Name' />
                <img src={searchIcon} alt="" />
            </div>
            <img src={cloudIcon} alt="" className='weather' />
            <p className='temprature'>16°C</p>
            <p className='location'>London</p>
            <div className="weather-data">
                <div className="col">
                    <img src={humidityIcon} alt="" />
                    <div>
                        <p>91 %</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="col">
                    <img src={windIcon} alt="" />
                    <div>
                        <p>3.6 KM/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}