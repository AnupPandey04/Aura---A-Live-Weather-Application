import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import Footer from "./Footer";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        temp: 18.16,
        tempMin: 17.19,
        tempMax: 19.76,
        humidity: 66,
        feelsLike: 17.75,
        weather: "Clear Sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h2 style={{color: "blue"}}>Aura - A Live Weather Application</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
            <Footer />
        </div>
    );
}