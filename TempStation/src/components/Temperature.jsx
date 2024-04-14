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
          height: "11vh",
          position: "absolute",
          left: "38vw",
          top: "36vh",
          // backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "55px",
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
          left: "38vw",
          top: "46vh",
          // backgroundColor: "blue",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
       <b>{data.weatherCondition}</b> 
      </div>
    </div>
  );
}

export default Temperature;
