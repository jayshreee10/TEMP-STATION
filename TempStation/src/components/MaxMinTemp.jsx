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
        width: "16vw",
        fontSize:"12px",
        fontWeight:"bold"
        // backgroundColor: "red",
      }}
    >
      <div className="FeelsLike">
      {data.feelsLike != "" ? <div style={{display:"flex" , justifyContent:"space-around"}}>
          <img src="src\assets\thermometer_.png" height={"15px"} width={"15px"}  style={{marginRight:"6px"}} /> 
          Feels like : {data.feelsLike}° C 
        </div> : " "}
      </div>

      <div className="MinTemp">
        {data.minTemp != "" ? 
        <div style={{display:"flex"}}>
          <img src="src\assets\thermometer-loss_.png" height={"20px"} width={"20px"} style={{marginRight:"2px"}}  /> 
          
        MinTemp : {data.minTemp}° C 
        </div> : " "}
 
      </div>

      <div className="MaxTemp">
      {data.maxTemp != "" ? <div  style={{display:"flex"}}>
        <img src="src\assets\thermometer-gain-rounded_.png " height={"20px"} width={"20px"} style={{marginRight:"2px" , border:"2px"}}  /> 
        MaxTemp : {data.maxTemp}° C
        </div> : ""}
        
      </div>
    </div>
  );
}

export default MaxMinTemp;
