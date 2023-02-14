
import axios from "axios";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
//import { useNavigation } from "@react-navigation/native";
import { useGeolocated } from "react-geolocated";


const HomePage = () => {

    const navigate = useNavigate();
    //const navigation = useNavigation();

    const [search, setSearch] = useState("");

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
//    const [weather, setWeather] = useState({});
    const [temperature, setTempterature] = useState("");
    const [humidity, setHumidity] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [pressure, setPressure] = useState("");
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const [feelslike, setFeelslike] = useState("");
    const [icon, setIcon] = useState("");

    const getPosition = (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    };

//    const mode = "lightblue";

    const getWeather = async () => {
        try {
            await window.navigator.geolocation.getCurrentPosition(getPosition);
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=ea4107b82a191ae093398d7b5d169c3a`);
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

//            const backgroundMode = () => {
//                let str = res.data.weather[0].icon;
//                if(str.charAt(str.length-1) === 'n')
//                {
//                    mode = "darkblue";
//                }
//            };

        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getWeather();
    }, [latitude, longitude]);

    const handleClick = (e) => {
        e.preventDefault();
        if(search === "") {
            alert("Please enter a city name!");
        } else {
            navigate("/results", { state: { city: search } });
        }
    }

    return(
//        <div style={{ backgroundColor: mode }}>
        <div className="app" >
            <div className="search" >
                <input 
                    type="text"
                    placeholder="Search for a city"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={handleClick}>Search</button>
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
        </div>
    );
};

export default HomePage;