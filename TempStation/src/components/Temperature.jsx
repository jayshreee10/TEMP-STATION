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
          fontWeight: "600",
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
          left: "40.5vw",
          top: "45.5vh",
          // backgroundColor: "blue",
          color: "white",
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        <div>
          <img
            src="src/assets/forecast_icon.png"
            height={"40vh"}
            width={"40vw"}
            style={{ marginRight: "5px" }}
            title="forecast"
          />
        </div>
        {data.weatherCondition}
      </div>
    </div>
  );
}

export default Temperature;
