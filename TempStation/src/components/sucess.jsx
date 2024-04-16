import React from "react";
import Location from "./Location";
import Temperature from "./Temperature";
import MaxMinTemp from "./MaxMinTemp";
import OtherData from "./OtherData";
import CallLottie from "./Lottie";

function sucess(props) {
  const data = props.data
  return (
    <div>
      {/*  all the datacontainers */}
      {/* data container box two  : card 3 = temp + celcius + weather condition (cloudy/sunny) ; card 4 = weather gif ; card 5 = extra data (feels like + min temp + max temp  )  */}
      <div
        className="SecondDataContainer"
        style={{
          display: "flex",
          height: "40vh",
          width: "85vw",
          // backgroundColor: "yellow",
        }}
      >
        {/* first data */}
        <div
          style={{
            width: "30vw",
            height: "22vh",
            position: "absolute",
            left: "10vw",
            top: "35vh",
            // backgroundColor: "black",
          }}
        >
          {/* card 1 = location + day + date + time */}
          <Location data={data} />
        </div>

        {/* card 3 */}
        <Temperature data={data} />

        {/* card 4 = weather gif */}
        <div
          className="Card4"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: "23vw",
            top: "32vh",
            height: "25vh",
            width: "25vw",
            // backgroundColor: "brown",
          }}
        >
          <CallLottie data={data} />
        </div>

        {/* card 5 = extra data (feels like + min temp + max temp  )   */}
        <MaxMinTemp data={data} />
      </div>

      {/* data container box three : card 6,7,8,9,10= extra data (  6: (sunrise + sunset) + 7: pressure + 8: humidity + 9: wind + 10: (sea_level + grnd_level) ) */}
      <div
        className="ThirdDataContainer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          height: "25vh",
          width: "75vw",
          position:"absolute",
          top:"62vh",
          left :"12.5vw"
          // backgroundColor: "red",
        }}
      >
        <OtherData data={data} />
      </div>
    </div>
  );
}

export default sucess;
