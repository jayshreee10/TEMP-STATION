import React from "react";
import minTemp from "../assets/thermometer-loss_.png"
import feelsLike from "../assets/thermometer_.png"
import maxTemp from "../assets/thermometer-gain-rounded_.png"
function MaxMinTemp(props) {
  const data = props.data;
  return (
    <div
      className="Card5"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        position: "absolute",
        right: "12vw",
        top: "38vh",
        height: "13vh",
        width: "16vw",
        fontSize: "15px",
        // fontWeight: "bold",
        // backgroundColor: "red",
      }}
    >
      <div className="FeelsLike">
        {data.feelsLike != "" ? (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ marginRight: "0px" }}>
              <img
                src={feelsLike}
                height={"16px"}
                width={"17px"}
                style={{
                  display: "flex",
                  marginTop:"3px"
                  // alignItems: "center",
                  // justifyContent: "center",
                }}
              />
            </div>
            <div
              style={{
                width: "12vw",
                // backgroundColor: "black",
                marginLeft: "5px",
              }}
            >
            Feels like : {data.feelsLike}° C

          </div>
          </div>
        ) : (
          " "
        )}
      </div>

      <div className="MinTemp">
        {data.minTemp != "" ? (
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "0px" }}>
              <img
                src={minTemp}
                height={"20px"}
                width={"20px"}
                style={{
                  display: "flex",
                  marginTop:"3px"
                  // alignItems: "center",
                  // justifyContent: "center",
                }}
              />
            </div>
            <div
              style={{
                width: "12vw",
                // backgroundColor: "black",
                marginLeft: "5px",
              }}
            >
              MinTemp : {data.minTemp}° C
            </div>
          </div>
        ) : (
          " "
        )}
      </div>

      <div className="MaxTemp">
        {data.maxTemp != "" ? (
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "0px" }}>
              <img
                src={maxTemp}
                height={"20px"}
                width={"20px"}
                style={{
                  display: "flex",
                  marginTop:"3px"
                  // alignItems: "center",
                  // justifyContent: "center",
                }}
              />
            </div>
            <div
              style={{
                width: "12vw",
                // backgroundColor: "black",
                marginLeft: "5px",
              }}
            >
              {" "}
              MaxTemp : {data.maxTemp}° C{" "}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MaxMinTemp;
