// import { useState } from "react";
import defaultUi from "./service/colors";
import { MdOutlineWbSunny } from "react-icons/md";

function DefaultWeather() {
//  const [station,setStation]= useState("")
 let station = "";

  return (
    <div
      className="defaultUi"
      style={{
        backgroundColor: "#3135F8",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      {/* text-field */}
      <input
        type="search"
        name="places"
        id="SearchBar"
        style={{ height: "40px", width: "30vw", backgroundColor: "white",opacity:"53%" ,color:"black"}}
        onChange={(e)=>{station = e.target.value}}
      />

      {/* container */}

      <div
        className=" container"
        style={{
          backgroundColor: "white",
          borderRadius: "40px",
          height: "50vh",
          width: "50vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {/* data section */}
        <div className="data" style={{ height: "300PX", width: "100PX" }}>
          <div
            style={{
              height: "30PX",
              width: "100PX",
              color: defaultUi.datatextcolor,
            }}
          >
            SUNRISE:
          </div>
          <div
            style={{
              height: "30PX",
              width: "100PX",
              color: defaultUi.datatextcolor,
            }}
          >
            SUNSET
          </div>
          <div
            style={{
              height: "30PX",
              width: "100PX",
              color: defaultUi.datatextcolor,
            }}
          >
            WIND
          </div>
          <div
            style={{
              height: "30PX",
              width: "100PX",
              color: defaultUi.datatextcolor,
            }}
          >
            HUMIDITY
          </div>
        </div>
        <div
          className="temperature"
          style={{ height: "350PX", width: "200PX" }}
        >
          <div
            className="icon"
            style={{ height: "100PX", width: "200PX", color: "black" }}
          >
            <MdOutlineWbSunny  style={{ color:"yellow",height:"100px",width:"100px"}}/>
          </div>
          <div
            className="location"
            style={{ height: "100PX", width: "200PX", fontSize: "30px",color:"yellow" }}
          >
            ODISHA
          </div>
          <div
            className="temp"
            style={{ height: "125PX", width: "200PX", fontSize: "50px" ,color:"yellow"}}
          >
            40
          </div>
        </div>
        <div className="otherData" style={{ height: "150PX", width: "100PX" }}>
          <div
            className="date"
            style={{ height: "75PX", width: "100PX",color:"yellow" }}
          >
            date
          </div>
          <div
            className="weather"
            style={{ height: "75PX", width: "100PX",color: "blue" }}
          >
           summer 
          </div>
        </div>
      </div>
    </div>
  );
}
export default DefaultWeather;
