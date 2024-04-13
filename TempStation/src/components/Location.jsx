import React from "react";
import { useState } from "react";
// import date from from "./service/time" ;
function Location(props) {
  // function getDate() {
  //   return new Date().getDate;
  // }
  // const [date, setDate] = useState(getDate());
  // setDate(getDate())

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
          fontSize: "46px",
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
          width: "10vw",
          height: "7vh",
          // backgroundColor: "red",
          display: "flex",
          // textAlign :"center",
          
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
