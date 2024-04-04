// import defaultUi from "./service/colors";
// import { FiSun } from "react-icons/fi";

function DefaultWeather() {
  return (
    <div
      className="defaultUi"
      style={{
        backgroundColor: "#3135F8",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        className=" container"
        style={{
          backgroundColor: "white",
          opacity: "53%",
          borderRadius: "40px",
          height: "50vh",
          width: "50vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          className="data"
          style={{ height: "300PX", width: "100PX", backgroundColor: "black" }}
        >
          <div>SUNRISE</div>
          <div>SUNSET</div>
          <div>WIND</div>
          <div>HUMIDITY</div>
        </div>
        <div
          className="temperature"
          style={{ height: "350PX", width: "200PX", backgroundColor: "black" }}
        >
          <div className="icon" style={{ height: "100PX", width: "200PX" }}>
          
            {/* <FiSun /> */}
          </div>
          <div
            className="location"
            style={{ height: "125PX", width: "200PX", fontSize: "30px" }}
          >
            {" "}
            ODISHA{" "}
          </div>
          <div
            className="temp"
            style={{ height: "125PX", width: "200PX", fontSize: "50px" }}
          >
            40{" "}
          </div>
        </div>
        <div className="otherData" style={{ height: "150PX", width: "100PX" }}>
          <div
            className="date"
            style={{ height: "75PX", width: "100PX", backgroundColor: "black" }}
          >
            date
          </div>
          <div
            className="weather"
            style={{ height: "75PX", width: "100PX", backgroundColor: "black" }}
          >
            weather
          </div>
        </div>
      </div>
    </div>
  );
}
export default DefaultWeather;
