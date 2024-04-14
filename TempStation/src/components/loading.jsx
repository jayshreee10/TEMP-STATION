import React from 'react'
import Lottie from 'lottie-react'
import loadingLottie from "../assets/lottie/loading.json"

function loading() {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
    <Lottie animationData={loadingLottie} style={{height:"50vh",width:"100vw"}}></Lottie>
    {/* <p style={{marginTop:"2%",marginLeft:"5%",fontWeight:"bolder",fontSize:"35px"}}> </p> */}

    </div>
  )
}

export default loading