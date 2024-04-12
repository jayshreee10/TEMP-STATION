import React from "react";

function MaxMinTemp(props) {
  const data = props.data;
  return (
    <div
      className="Card5"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: "12.5vw",
        top: "40vh",
        height: "16vh",
        width: "15vw",
        // backgroundColor: "red",
      }}
    >
      <div className="FeelsLike">
        {data.feelsLike != "" ? `Feels like : ${data.feelsLike}` : " "}
      </div>
      <div className="MinTemp">
        {data.minTemp != "" ? `MinTemp : ${data.minTemp}` : " "}
      </div>
      <div className="MaxTemp">
        {data.maxTemp != "" ? `maxTemp : ${data.maxTemp}` : ""}
      </div>
    </div>
  );
}

export default MaxMinTemp;
