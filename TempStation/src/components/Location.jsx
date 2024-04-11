import React from "react";

function Location(props) {
  const data = props.data
  return (
    <div
      className="Card1"
      style={{
        width: "25vw",
        height: "20vh",
        // backgroundColor: "transparent",
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
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div className="day">
          <b>{data.day}</b> 
        </div>
        <div className="date">
          <b>{data.date}</b> 
        </div>
        <div className="time">
          <b>{data.time}</b>
        </div>
      </div>
    </div>
  );
}

export default Location;
