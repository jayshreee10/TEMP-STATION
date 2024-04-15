import { useState } from "react";
import Sucess from "./components/sucess";
import Initial from "./components/initial";
import Loading from "./components/loading";
import Error from "./components/error";

function TempStation() {
  let defaultData = {
    location: "",
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
    longitude: "",
    latitude: "",
  };
  const [data, setData] = useState(defaultData);
  const [inputLocation, setInputLocation] = useState("");
  /* 
  appstate == -1: Error 
  appstate == 0: Initial
  appstate == 1: Loading 
  appstate == 2: Sucess 

  */
  const [appState, setAppState] = useState(0);

  const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  };
  async function callApi() {
    setAppState(1);
    await delay(3000) ;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&appid=7d3a506953bf739eb497cd7257dfe861&units=metric`
    );

    if (response.status == 200) {
      const apiData = await response.json();
      console.log(apiData);
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
        lottie: apiData.weather[0].main,
        longitude: apiData.coord.lon,
        latitude: apiData.coord.lat,
      };
      setData(newData);
      setAppState(2);
    } else {
      setAppState(-1);
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
          {/* card 0= search bar */}
          <div
            className="Card0"
            style={{
              width: "35vw",
              height: "10vh",
              // backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              // right: "0vw",
              top: "3vh",
            }}
          >
            {" "}
            <div />
            <input
              type="search"
              name="SearchBar"
              id="SearchBar"
              placeholder="Enter City Name"
              style={{
                width: "30vw",
                height: "4.8vh",
                backgroundColor: "white",
                opacity: "60%",
                paddingLeft: "12px",
                paddingRight: "5px",
                border: "none",
                color: "black",
                borderRadius: "4px",
              }}
              onChange={(e) => {
                setInputLocation(e.target.value);
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

        {appState == 0 ? (
          <Initial />
        ) : appState == 1 ? (
          <Loading />
        ) : appState == 2 ? (
          <Sucess data={data} />
        ) : appState == -1 ? (
          <Error />
        ) : (
          <Initial />
        )}
      </div>
    </div>
  );
}
export default TempStation;
