import React from "react";
import epochConverter from "../service/time";
import Lottie from "lottie-react";
import humidity from "../assets/lottie/humidity.json";
import Pressure from "../assets/lottie/pressure.json";
import wind from "../assets/lottie/New Lottie/Wind.json";
import latlon from "../assets/lottie/New Lottie/latlon.json";


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
            <div>Sunrise : {epochConverter(data.sunrise)}</div>
          ) : (
            ""
          )}
        </div>
        <div className="sunset">
          {data.sunset != "" ? (
            <div>Sunset : {epochConverter(data.sunset)}</div>
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
            style={{ height: "7vh", width: "7vw" }}
          />

          {/* <img src="src/assets/pressure.gif" alt="" srcset="" height={"70vh"} width={"100vw"} /> */}
        </div>
        <div className="pressure" style={{ marginTop: "23px" }}>
          {data.pressure != "" ? <div>Pressure : {data.pressure}hPa</div> : ""}
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
            style={{ height: "14vh", width: "10vw", marginTop: "-20px" }}
          />
        </div>
        <div className="humidity" style={{ marginTop: "-3px" }}>
          {data.humidity != "" ? <div>Humidity : {data.humidity}%</div> : ""}
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
              style={{ height: "14vh", width: "16vw",marginTop:"-4vh"}}
            />{" "}
          </div>
        </div>
        <div className="wind">
          {data.wind != "" ? <div> Wind : {data.wind} m/s </div> : ""}
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
              style={{ height: "15.5vh", width: "10vw",marginTop:"0vh"}}
            />{" "}
          </div>
        </div>
        <div className="lat">
          {data.latitude != "" ? <div style={{marginTop:"-2vh"}}> Latitude : {data.latitude}d</div> : ""}
        </div>
        <div className="lon">
          {data.longitude != "" ? <div> Longitude : {data.longitude}d</div> : ""}
        </div>
      </div>
    </>
  );
}

export default OtherData;
