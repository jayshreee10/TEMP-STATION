import React from "react";
import forecast from "../assets/forecast_icon.png"

function Temperature(props) {
  const data = props.data;
  return (
    <div className="Card3">
      {/* card 3.1 = temp */}
      <div
        className="Temperature"
        style={{
          width: "17vw",
          height: "11vh",
          position: "absolute",
          left: "41vw",
          top: "35vh",
          // backgroundColor: "brown",
          color: "white",
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          fontSize: "45px",
          fontWeight: "400",
        }}
      >
        {" "}
        {data.temperature != "" ? ` ${data.temperature}°C ` : ""}
      </div>

      {/* card 3.2 = Unit in celcius
    <div className="Unit"> C|F</div> */}

      {/* card 3.2 = weather condition (cloudy/sunny) */}
      <div
        className="WeatherCondition"
        style={{
          width: "15vw",
          height: "5vh",
          position: "absolute",
          left: "39vw",
          top: "45.5vh",
          // backgroundColor: "blue",
          color: "white",
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          fontSize: "20px",
          // fontWeight: "600",
        }}
      >
        <div>
          <img
            src={forecast}
            height={"40vh"}
            width={"40vw"}
            style={{ marginRight: "3px" }}
            title="forecast"
          />
        </div>
        {data.weatherCondition}
      </div>
    </div>
  );
}

export default Temperature;
