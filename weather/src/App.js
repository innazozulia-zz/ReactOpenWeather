import React from "react";
import axios from "axios";

function App() {
  const [data, setData] = React.useState({});
  const [location, setLocation] = React.useState("");

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocation("");
    }
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=498e887f673d0382a27148eaa530c941&units=metric`;

  return (
    <div className="wrapper">
      <div className="search">
        <input
          value={location}
          placeholder="Enter your location"
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          type="text"
        />
      </div>
      <div className="conteiner">
        <div className="top">
          <div className="location">
            <h1>{data.name}</h1>
          </div>
          <div className="temperature">
            {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>Feels like</p>
            {data.main ? (
              <p className="bold">{data.main.feels_like.toFixed()} °C</p>
            ) : null}
          </div>
          <div className="humidity">
            <p>Humidity</p>
            {data.main ? (
              <p className="bold"> {data.main.humidity} % </p>
            ) : null}
          </div>
          <div className="wind">
            <p>Wind</p>
            {data.main ? <p className="bold">{data.wind.speed}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
