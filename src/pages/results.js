import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react"

const ResultsPage = (props) => {

    const navigate = useNavigate();
    const {state} = useLocation();
    const { city } = state;

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
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=ea4107b82a191ae093398d7b5d169c3a`);
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
    }, [city]);

    return (
        <div className="app">
            <div className="search" >
                <br />
            </div>
            <div className="currentWeather" >
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
            <div className="extendedForecast" >
                <h4>7 Day Forcast</h4>
                <p>Not supported in the free weather API option</p>
            </div>
            <div className="navButton">
                <button onClick={() => navigate("/home")}>Back to home page</button>
            </div>
        </div>
    );
};

export default ResultsPage;