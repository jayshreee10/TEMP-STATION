import Lottie from "lottie-react";
import cloud from "../assets/lottie/cloud.json"
import clear from "../assets/lottie/clear.json";
import rain from "../assets/lottie/rain.json";
import drizzle from "../assets/lottie/drizzle.json";
import mist from "../assets/lottie/mist.json";

function CallLottie(props) {
   const newData = props.data ;
  //  console.log (newData) ;
  if (newData.lottie == "Clear") {
    return <Lottie animationData={clear} style={{ height: "23vh", width: "20vw" }} />;
  } else if (newData.lottie == "Clouds") {
    return <Lottie animationData={cloud} style={{ height: "36vh", width: "37vw" }} />;
  } else if (newData.lottie == "Rain") {
    return <Lottie
      animationData={rain}
      style={{ height: "25vh", width: "25vw", marginTop: "20px" }}
    />;
  } else if (newData.lottie == "Drizzle") {
    return <Lottie
      animationData={drizzle}
      style={{ height: "35vh", width: "35vw" }}
    />;
  } else if (newData.lottie == "Mist" || newData.lottie == "Haze" ) {
    return <Lottie animationData={mist} style={{ height: "35vh", width: "35vw" }} />;
  }

  else {
    return  <Lottie animationData={clear} style={{ height: "23vh", width: "20vw" }} />
  }


}

export default CallLottie;
