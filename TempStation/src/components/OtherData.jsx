import React from "react";
import epochConverter from "../service/time";
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
          borderRadius:"20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "15px",
          flexDirection: "column",
        }}
      >
        {/* Card 6: (sunrise + sunset) */}
        <div className="SunShine">
        <img src="src/assets/sunset-sun.gif" alt="" srcset="" height={"80vh"} width={"80vw"} />           

        </div>
        <div className="sunrise">
          {data.sunrise != "" ? `Sunrise : ${epochConverter(data.sunrise)}` : ""}
        </div>
        <div className="sunset">
          {data.sunset != "" ? `Sunset : ${epochConverter(data.sunset)}` : ""}
        </div>
      </div>
      <div
        className="Card7"
        style={{
          height: "22vh",
          width: "13vw",
          backgroundColor: "#111F55",
          borderRadius:"20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "15px",
          flexDirection: "column",
        }}
      >
        <div className="pressure">
        <img src="src/assets/pressure.gif" alt="" srcset="" height={"70vh"} width={"100vw"} />
        </div>
        <div className="pressure">
          {data.pressure != "" ? `Pressure : ${data.pressure}` : ""}
        </div>
      </div>
      <div
        className="Card8"
        style={{
          height: "22vh",
          width: "13vw",
          backgroundColor: "#111F55",
          borderRadius:"20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "15px",
          flexDirection: "column",
        }}
      >
        <div className="humidity">image</div>
        <div className="humidity">
          {data.humidity != "" ? `humidity : ${data.humidity}` : ""}
        </div>
      </div>
      <div
        className="Card9"
        style={{
          height: "22vh",
          width: "13vw",
          backgroundColor: "#111F55",
          borderRadius:"20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "15px",
          flexDirection: "column",
        }}
      >
        <div className="wind">
                  

        </div>
        <div className="wind">
          {data.wind != "" ? ` wind : ${data.wind}` : ""}
        </div>
      </div>
      <div
        className="Card10"
        style={{
          height: "22vh",
          width: "13vw",
          backgroundColor: "#111F55",
          borderRadius:"20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "15px",
          flexDirection: "column",
        }}
      >
        <div className="Levels">image</div>
        <div className="seaLevel">
          {data.longitude != "" ? `  longitude : ${data.longitude}` : ""}
        </div>
        <div className="grndLevel">
          {data.latitude != "" ? ` latitude : ${data.latitude}` : ""}
        </div>
      </div>
    </>
  );
}

export default OtherData;
