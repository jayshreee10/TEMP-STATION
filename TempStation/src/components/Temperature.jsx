import React from "react";

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
          left: "43vw",
          top: "35vh",
          // backgroundColor: "brown",
          color: "white",
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          fontSize: "45px",
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
          width: "17vw",
          height: "5vh",
          position: "absolute",
          left: "43vw",
          top: "47vh",
          // backgroundColor: "blue",
          color: "white",
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          fontWeight:"600"
        }}
      >
        {data.weatherCondition}
      </div>
    </div>
  );
}

export default Temperature;
