import axios from "axios";
import { useState, useEffect } from "react"

const ForcastWeather = (props) => {

    const [city, setCity] = useState("");

    const [date1, setDate1] = useState("");
    const [temp1, setTemp1] = useState("");
    const [min1, setMin1] = useState("");
    const [max1, setMax1] = useState("");
    const [icon1, setIcon1] = useState("");
    const [description1, setDescription1] = useState("");
    const [date2, setDate2] = useState("");
    const [temp2, setTemp2] = useState("");
    const [min2, setMin2] = useState("");
    const [max2, setMax2] = useState("");
    const [icon2, setIcon2] = useState("");
    const [description2, setDescription2] = useState("");
    const [date3, setDate3] = useState("");
    const [temp3, setTemp3] = useState("");
    const [min3, setMin3] = useState("");
    const [max3, setMax3] = useState("");
    const [icon3, setIcon3] = useState("");
    const [description3, setDescription3] = useState("");
    const [date4, setDate4] = useState("");
    const [temp4, setTemp4] = useState("");
    const [min4, setMin4] = useState("");
    const [max4, setMax4] = useState("");
    const [icon4, setIcon4] = useState("");
    const [description4, setDescription4] = useState("");
    const [date5, setDate5] = useState("");
    const [temp5, setTemp5] = useState("");
    const [min5, setMin5] = useState("");
    const [max5, setMax5] = useState("");
    const [icon5, setIcon5] = useState("");
    const [description5, setDescription5] = useState("");

    const getWeather = async () => {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.place}&units=metric&APPID=ea4107b82a191ae093398d7b5d169c3a`);
            const latitude = res.data.coord.lat;
            const longitude =res.data.coord.lon;
            const extdata = await axios.get(` https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=33&appid=ea4107b82a191ae093398d7b5d169c3a&units=metric`);
//            const extdata = await axios.get(` https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=7&appid=ea4107b82a191ae093398d7b5d169c3a&units=metric`);
 //           const extdata = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/?q=${props.place}&cnt=7&appid=ea4107b82a191ae093398d7b5d169c3a&units=metric`);          
            setCity(extdata.data.city.name);
            console.log(extdata.data);
            setDate1(extdata.data.list[0].dt);
            setTemp1(extdata.data.list[0].main.temp.toFixed());
            setMin1(extdata.data.list[0].main.temp_min.toFixed());
            setMax1(extdata.data.list[0].main.temp_max.toFixed());
            setIcon1("http://openweathermap.org/img/wn/" + extdata.data.list[0].weather[0].icon + "@2x.png");
            setDescription1(extdata.data.list[0].weather[0].description);
            setDate2(extdata.data.list[8].dt);
            setTemp2(extdata.data.list[8].main.temp.toFixed());
            setMin2(extdata.data.list[8].main.temp_min.toFixed());
            setMax2(extdata.data.list[8].main.temp_max.toFixed());
            setIcon2("http://openweathermap.org/img/wn/" + extdata.data.list[8].weather[0].icon + "@2x.png");
            setDescription2(extdata.data.list[8].weather[0].description);
            setDate3(extdata.data.list[16].dt);
            setTemp3(extdata.data.list[16].main.temp.toFixed());
            setMin3(extdata.data.list[16].main.temp_min.toFixed());
            setMax3(extdata.data.list[16].main.temp_max.toFixed());
            setIcon3("http://openweathermap.org/img/wn/" + extdata.data.list[16].weather[0].icon + "@2x.png");
            setDescription3(extdata.data.list[16].weather[0].description);
            setDate4(extdata.data.list[24].dt);
            setTemp4(extdata.data.list[24].main.temp.toFixed());
            setMin4(extdata.data.list[24].main.temp_min.toFixed());
            setMax4(extdata.data.list[24].main.temp_max.toFixed());
            setIcon4("http://openweathermap.org/img/wn/" + extdata.data.list[24].weather[0].icon + "@2x.png");
            setDescription4(extdata.data.list[24].weather[0].description);
            setDate5(extdata.data.list[32].dt);
            setTemp5(extdata.data.list[32].main.temp.toFixed());
            setMin5(extdata.data.list[32].main.temp_min.toFixed());
            setMax5(extdata.data.list[32].main.temp_max.toFixed());
            setIcon5("http://openweathermap.org/img/wn/" + extdata.data.list[32].weather[0].icon + "@2x.png");
            setDescription5(extdata.data.list[32].weather[0].description);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getWeather();
    });

    var dayname1 = new Date(date1 * 1000).toLocaleDateString("en", {
        weekday: "long",
    });
    var dayname2 = new Date(date2 * 1000).toLocaleDateString("en", {
        weekday: "long",
    });
    var dayname3 = new Date(date3 * 1000).toLocaleDateString("en", {
        weekday: "long",
    });
    var dayname4 = new Date(date4 * 1000).toLocaleDateString("en", {
        weekday: "long",
    });
    var dayname5 = new Date(date5 * 1000).toLocaleDateString("en", {
        weekday: "long",
    });

    return (
        <div>
            <h4>7 Day Forecast</h4>
            <p>{city}</p>
            <div className="days">
                <div className="day">
                    <h5>{dayname1}</h5>
                    <img src={icon1} alt={description1} />
                    <p>{temp1}°C</p>
                    <p>L: {min1}°C &nbsp; H: {max1}°C</p>
                </div>
                <div className="day">
                    <h5>{dayname2}</h5>
                    <img src={icon2} alt={description2} />
                    <p>{temp2}°C</p>
                    <p>L: {min2}°C &nbsp; H: {max2}°C</p>
                </div>
                <div className="day">
                    <h5>{dayname3}</h5>
                    <img src={icon3} alt={description3} />
                    <p>{temp3}°C</p>
                    <p>L: {min3}°C &nbsp; H: {max3}°C</p>
                </div>
                <div className="day">
                    <h5>{dayname4}</h5>
                    <img src={icon4} alt={description4} />
                    <p>{temp4}°C</p>
                    <p>L: {min4}°C &nbsp; H: {max4}°C</p>
                </div>
                <div className="day">
                    <h5>{dayname5}</h5>
                    <img src={icon5} alt={description5} />
                    <p>{temp5}°C</p>
                    <p>L: {min5}°C &nbsp; H: {max5}°C</p>
                </div>
            </div>
            
        </div>
    );
};

export default ForcastWeather;