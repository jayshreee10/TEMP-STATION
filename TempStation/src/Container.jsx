import { useState } from "react";
import Location from "./components/Location";
import Temperature from "./components/Temperature";
import MaxMinTemp from "./components/MaxMinTemp";
import OtherData from "./components/OtherData";

function TempStation() {
  let defaultData = {
    location: "",
    day: "",
    date: "",
    time: "",
    temperature: "",
    humidity: "",
    wind: "",
    pressure: "",
    weatherCondition: "",
    feelsLike: "",
    minTemp: "",
    maxTemp: "",
    sunrise: "",
    sunset: "",
    seaLevel: "",
    grndLevel: "",
  };
  const [data, setData] = useState(defaultData);
  const [error, setError] = useState(false);
  let inputLocation = "";
  async function callApi() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&appid=7d3a506953bf739eb497cd7257dfe861&units=metric`
    );
    if (response.status == 200) {
      const apiData = await response.json();
      let newData = {
        temperature: apiData.main.temp,
        location: apiData.name,
        humidity: apiData.main.humidity,
        wind: apiData.wind.speed,
        pressure: apiData.main.pressure,
        feelsLike: apiData.main.feels_like,
        maxTemp: apiData.main.temp_max,
        minTemp: apiData.main.temp_min,
        sunrise: apiData.sys.sunrise,
        sunset: apiData.sys.sunset,
        weatherCondition: apiData.weather[0].description,
      };
      console.log(newData);
      setData(newData);
      setError(false);
    } else {
      setError(true);
    }
  }
  return (
    <div
      className="Root"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "aliceblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* // parent data container */}
      <div
        className="Container"
        style={{
          height: "80vh",
          width: "75vw",
          backgroundColor: "#000D49",
          borderRadius: "30px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/*  data container box one : card 1 = location + date + time + day ; card 2 = search bar   */}
        <div
          className="FirstDataContainer"
          style={{
            height: "25vh",
            width: "75vw",
            position: "absolute",
            top: "11vh",
            // backgroundColor: "yellowgreen",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {/* card 1 = location + day + date + time */}
          {error ? <div>error</div> : <Location data={data} />}

          {/* card 2 = search bar */}
          <div
            className="Card2"
            style={{
              width: "35vw",
              height: "10vh",
              // backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              right: "0vw",
              top: "0",
            }}
          >
            <input
              type="search"
              name="SearchBar"
              id="SearchBar"
              placeholder="Enter City Name"
              style={{
                width: "20vw",
                height: "4.8vh",
                backgroundColor: "white",
                opacity: "60%",
                paddingLeft: "12px",
                paddingRight :"5px",
                border: "none",
                color: "black",
                borderRadius: "4px",
              }}
              onChange={(e) => {
                inputLocation = e.target.value;
              }}
            />

            <button
              type="button"
              value="Search"
              style={{
                backgroundColor: "navy",
                opacity: "80%",
                width: "6vw",
                height: "5vh",
                marginLeft: "1vw",
                borderRadius: "6px",
                color: "white",
                textAlign: "center",
                fontSize: "12px",
              }}
              onClick={() => {
                callApi();
              }}
            >
              Search
            </button>
          </div>
        </div>

        {/* data container box two  : card 3 = temp + celcius + weather condition (cloudy/sunny) ; card 4 = weather gif ; card 5 = extra data (feels like + min temp + max temp  )  */}
        <div
          className="SecondDataContainer"
          style={{
            display: "flex",
            height: "50vh",
            width: "85vw",
            // backgroundColor: "yellow",
          }}
        >
          <Temperature data={data} />

          {/* card 4 = weather gif */}
          <div
            className="Card4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              right: "25vw",
              top: "36vh",
              height: "25vh",
              width: "25vw",
              // backgroundColor: "brown",
            }}
          >
            gif
          </div>

          {/* card 5 = extra data (feels like + min temp + max temp  )   */}
          <MaxMinTemp data={data} />
        </div>

        {/* data container box three : card 6,7,8,9,10= extra data (  6: (sunrise + sunset) + 7: pressure + 8: humidity + 9: wind + 10: (sea_level + grnd_level) ) */}
        <div
          className="ThirdDataContainer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            height: "25vh",
            width: "85vw",
            // backgroundColor: "red",
          }}
        >
          <OtherData data={data} />
        </div>
      </div>
    </div>
  );
}
export default TempStation;
