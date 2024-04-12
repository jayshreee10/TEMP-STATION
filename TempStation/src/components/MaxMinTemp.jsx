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
        fontSize:"15px"
        // backgroundColor: "red",
      }}
    >
      <div className="FeelsLike">
        {data.feelsLike != "" ? `Feels like : ${data.feelsLike}° C` : " "}
      </div>
      <div className="MinTemp">
        {data.minTemp != "" ? `MinTemp : ${data.minTemp}° C` : " "}
      </div>
      <div className="MaxTemp">
        {data.maxTemp != "" ? `MaxTemp : ${data.maxTemp}° C` : ""}
      </div>
    </div>
  );
}

export default MaxMinTemp;
