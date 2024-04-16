import React from "react";
import { useState } from "react";
// import date from from "./service/time" ;
function Location(props) {
  function getTime() {
    return new Date().toDateString();
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
        width: "28vw",
        height: "20vh",
        // backgroundColor: "black",
        position: "absolute",
        left: "5vw",
        // top: "vh",
        display: "flex",
        flexDirection: "column",
        color: "white",
        justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <div
        className="loaction"
        style={{
          width: "28vw",
          height: "8vh",
          // backgroundColor: "blue",
          fontSize: "20px",
          fontWeight: "500",
          display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <div>
          {" "}
          <img
            src="src/assets/location_icon.png"
            alt=""
            srcset=""
            height={"35vh"}
            width={"35vw"}
          />
        </div>

        {data.location}
      </div>

      <div
        className="locationData"
        style={{
          width: "26vw",
          height: "4vh",
          // backgroundColor: "red",
          display: "flex",
          // marginTop:"3vh",
          fontSize: "16px",
          // justifyContent: "center",
        }}
      >
        <div>
          {" "}
          <img
            src="src/assets/calendar_icon.png"
            alt=""
            srcset=""
            height={"25vh"}
            width={"25vw"}
            style={{ marginRight: "8px",marginLeft:"8px" }}
          />{" "}
        </div>
        {data.location != "" ? (
          <div className="time">
            <b> {time}</b>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Location;
