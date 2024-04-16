import React from "react";
import Lottie from "lottie-react";
import initialLottie from "../assets/lottie/New Lottie/Hello sunshine (1).json";
import Fonts from "../service/fonts"

function initial() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        width: "80vw",
        // backgroundColor:"black"
      }}
    >
      <Lottie
        animationData={initialLottie}
        style={{
          height: "60vh",
          width: "50vw",
          position: "absolute",
          // backgroundColor:"brown",
          top: "20vh",
        }}
      ></Lottie>
      <p
        style={{
          // fontWeight: "bolder",
          fontSize: "35px",
          position: "absolute",
          top: "66vh",
          
        }}
      >
        {" "}
        Hey Sunshine !! Ready To Forecast ??{" "}
      </p>
    </div>
  );
}

export default initial;
