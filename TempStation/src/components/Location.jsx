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
    return new Date().toLocaleTimeString();
  }
  const [time, setTime] = useState(getTime());
  setInterval(() => {
    setTime(getTime());
  }, 1000);

  const data = props.data;
  return (
    <div
      className="Card1"
      style={{
        width: "20vw",
        height: "25vh",
        // backgroundColor: "black",
        position: "absolute",
        left: "0vw",
        top: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="loaction"
        style={{
          width: "15vw",
          height: "10vh",
          // backgroundColor: "blue",
          fontSize: "46px",
          fontWeight: "400",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.location}
      </div>
      <div
        className="locationData"
        style={{
          width: "15vw",
          height: "7vh",
          // backgroundColor: "red",
          display: "flex",
         textAlign :"center",
          justifyContent: "space-evenly",
        }}
      >
        <div className="day">{/* {()=>{setDate(getDate)} } */}</div>
        <div className="date">
          {/* <b>{date}</b> */}
        </div>
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
