import './Weather.css'
import searchIcon from '../assets/search.png'

export default function Weather(){
    return(
        <div className="weather">
            <div className="search-bar">
                <input type="text" placeholder='City Name' />
                <img src={searchIcon} alt="" />
            </div>
        </div>
    )
}