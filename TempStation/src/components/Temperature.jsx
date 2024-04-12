import React from "react";

function Temperature(props) {
  const data = props.data;
  return (
    <div className="Card3">
      {/* card 3.1 = temp */}
      <div
        className="Temperature"
        style={{
          width: "20vw",
          height: "15vh",
          position: "absolute",
          left: "12vw",
          top: "37vh",
        //   backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
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
          width: "20vw",
          height: "5vh",
          position: "absolute",
          left: "12vw",
          top: "50vh",
        //   backgroundColor: "blue",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        {data.weatherCondition}
      </div>
    </div>
  );
}

export default Temperature;
