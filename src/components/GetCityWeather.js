import { useEffect, useState } from "react";
import { UseCities } from "../context/CitiesContext";
import axios from "axios";
import "./style.css";
function GetCityWeather() {
    const [weaklyWeather, setWeaklyWeather] = useState([]);
    const [city, setCity] = useState({
        id: 7,
        latitude: "36.8841",
        longitude: "30.7056",
        name: "Antalya",
        population: 2288456,
        region: "Akdeniz",
    });
    const cities = UseCities();
    const getDay = (unixTime) => {
        let date = new Date(unixTime * 1000);
        // eslint-disable-next-line default-case
        switch (date.getDay()) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
        }
    };

    const apiKey = "d746775be823cf4eb7d1f8a1a1e63a14";
    useEffect(() => {
        axios(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude=current&units=metric&lang=tr_tr&appid=${apiKey}`
        ).then((res) => {
            setWeaklyWeather(res.data.daily);
            console.log(weaklyWeather);
        });
    }, [city, weaklyWeather]);
    return (
        <div>
            <select onChange={(e) => setCity(JSON.parse(e.target.value))}>
                {cities.map((city) => (
                    <option key={city.id} value={JSON.stringify(city)}>
                        {city.name}
                    </option>
                ))}
            </select>
            <h1>{city.name}</h1>
            <div className="container">
                {weaklyWeather.map((daily, index) => (
                    <div key={index} className="weatherContainer">
                        <div className="day">{getDay(daily.dt)}</div>
                        <div>
                            <img
                                className="icon"
                                src={`http://openweathermap.org/img/w/${daily.weather[0].icon}.png`}
                            />
                            <div className="temp">
                                {Math.ceil(daily.temp.day)} &#8451;
                            </div>
                        </div>
                        <div className="description">
                            {daily.weather[0].description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GetCityWeather;
