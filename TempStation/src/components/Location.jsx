import React from "react";
import { useState } from "react";
// import date from from "./service/time" ;
function Location(props) {
  function getTime() {
    return new Date().toUTCString();
  }
  const [time, setTime] = useState(getTime());
  setInterval(() => {
    setTime(getTime());
  });

  const data = props.data;
  return (
    <div
      className="Card1"
      style={{
        width: "20vw",
        height: "25vh",
        // backgroundColor: "black",
        position: "absolute",
        left: "5vw",
        top: "0",
        display: "flex",
        flexDirection: "column",
        color:"white"
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <div
        className="loaction"
        style={{
          width: "25vw",
          height: "10vh",
          // backgroundColor: "blue",
          fontSize: "50px",
          fontWeight: "400",
          display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        {data.location}
      </div>
      <div
        className="locationData"
        style={{
          width: "13vw",
          height: "7vh",
          // backgroundColor: "red",
          display: "flex",
          textAlign :"left",
          
          // justifyContent: "space-evenly",
        }}
      >

        {data.location != "" ? (
          <div className="time">
            <b>{time}</b>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Location;
