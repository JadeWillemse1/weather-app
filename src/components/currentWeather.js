import axios from "axios";
import { useState, useEffect } from "react"

const CurrentWeather = (props) => {

    const [temperature, setTempterature] = useState("");
    const [humidity, setHumidity] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [pressure, setPressure] = useState("");
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const [feelslike, setFeelslike] = useState("");
    const [icon, setIcon] = useState("");

    const getWeather = async () => {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.place}&units=metric&APPID=ea4107b82a191ae093398d7b5d169c3a`);
            setTempterature(res.data.main.temp.toFixed());
            setHumidity(res.data.main.humidity);
            setDescription(res.data.weather[0].description);
            setName(res.data.name);
            setPressure(res.data.main.pressure);
            setMin(res.data.main.temp_min.toFixed());
            setMax(res.data.main.temp_max.toFixed());
            setFeelslike(res.data.main.feels_like.toFixed());
            setIcon("http://openweathermap.org/img/wn/" + res.data.weather[0].icon + "@2x.png");
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getWeather();
    });

    return (
        <div>
            <div className="top">
                    <h1>{name}</h1>
                    <img src={icon} alt={description} />
                    <h2>{temperature}°C</h2>
                    <h4>{description}</h4>
                </div>
                <div className="bottom">
                    <div className="left">
                        <p>Feels Like: {feelslike}°C</p>
                        <p>L: {min}°C &emsp; H: {max}°C</p>
                    </div>
                    <div className="left">
                        <p>Humidity: {humidity}%</p>
                        <p>Pressure: {pressure}hPa</p>
                    </div>
                </div>
        </div>
    );
};

export default CurrentWeather;