import { useNavigate, useLocation } from "react-router-dom";
import ForcastWeather from "../components/forecastWeather";
import CurrentWeather from "../components/currentWeather";

const ResultsPage = (props) => {

    const navigate = useNavigate();
    const {state} = useLocation();
    const { city } = state;

    return (
        <div className="app">
            <div className="search" >
                <br />
            </div>
            <div className="currentWeather" >
                < CurrentWeather place={city} />
            </div>
            <div className="extendedForecast" >
                < ForcastWeather place={city} />
            </div>
            <div className="navButton">
                <button onClick={() => navigate("/home")}>Back to home page</button>
            </div>
        </div>
    );
};

export default ResultsPage;