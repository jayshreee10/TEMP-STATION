import React from "react";
import epochConverter from "../service/time";
import Lottie from "lottie-react";
import humidity from "../assets/lottie/humidity.json";
import Pressure from "../assets/lottie/pressure.json";
import wind from "../assets/lottie/New Lottie/Wind.json";
import latlon from "../assets/lottie/New Lottie/altitude.json";


function OtherData(props) {
  const data = props.data;
  return (
    <>
    
      <div
        className="Card6"
        style={{
          height: "22vh",
          width: "13vw",
          backgroundColor: "#111F55",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "15px",
          flexDirection: "column",
        }}
      >
        {/* Card 6: (sunrise + sunset) */}
        <div className="SunShine">
          <img
            src="src/assets/sunset-sun.gif"
            alt=""
            srcset=""
            height={"85vh"}
            width={"85vw"}
          />
        </div>
        <div className="sunrise">
          {data.sunrise != "" ? (
            <b>Sunrise : {epochConverter(data.sunrise)}</b>
          ) : (
            ""
          )}
        </div>
        <div className="sunset">
          {data.sunset != "" ? (
            <b>Sunset : {epochConverter(data.sunset)}</b>
          ) : (
            ""
          )}
        </div>
      </div>

      <div
        className="Card7"
        style={{
          height: "22vh",
          width: "13vw",
          backgroundColor: "#111F55",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "15px",
          flexDirection: "column",
        }}
      >
        <div className="pressure">
          <Lottie
            animationData={Pressure}
            style={{ height: "11vh", width: "8vw" }}
          />

          {/* <img src="src/assets/pressure.gif" alt="" srcset="" height={"70vh"} width={"100vw"} /> */}
        </div>
        <div className="pressure" style={{ marginTop: "10px" }}>
          {data.pressure != "" ? <b>Pressure : {data.pressure}hPa</b> : ""}
        </div>
      </div>
      <div
        className="Card8"
        style={{
          height: "22vh",
          width: "13vw",
          backgroundColor: "#111F55",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "15px",
          flexDirection: "column",
        }}
      >
        <div className="humidity">
          <Lottie
            animationData={humidity}
            style={{ height: "18vh", width: "10vw", marginTop: "-30px" }}
          />
        </div>
        <div className="humidity" style={{ marginTop: "-8px" }}>
          {data.humidity != "" ? <b>Humidity : {data.humidity}%</b> : ""}
        </div>
      </div>
      <div
        className="Card9"
        style={{
          height: "22vh",
          width: "13vw",
          backgroundColor: "#111F55",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "15px",
          flexDirection: "column",
        }}
      >
        <div className="wind">
          <div>
            {" "}
            <Lottie
              animationData={wind}
              style={{ height: "17vh", width: "16vw",marginTop:"-4vh"}}
            />{" "}
          </div>
        </div>
        <div className="wind">
          {data.wind != "" ? <b> Wind : {data.wind} m/s </b> : ""}
        </div>
      </div>
      <div
        className="Card10"
        style={{
          height: "22vh",
          width: "13vw",
          backgroundColor: "#111F55",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "15px",
          flexDirection: "column",
        }}
      >
        <div className="Levels">
          <div>
            {" "}
            <Lottie
              animationData={latlon}
              style={{ height: "15.5vh", width: "10vw",marginTop:"-2vh"}}
            />{" "}
          </div>
        </div>
        <div className="lat">
          {data.latitude != "" ? <b> Latitude : {data.latitude}d</b> : ""}
        </div>
        <div className="lon">
          {data.longitude != "" ? <b> Longitude : {data.longitude}d</b> : ""}
        </div>
      </div>
    </>
  );
}

export default OtherData;
