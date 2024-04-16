import React from 'react'
import Lottie from 'lottie-react'
import errorLottie from "../assets/lottie/New Lottie/error.json"


function error() {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" , }}>
    <Lottie animationData={errorLottie} style={{height:"45vh",width:"100vw"}}></Lottie>
    <p style={{marginTop:"",marginLeft:"1%",fontWeight:"bolder",fontSize:"35px"}}>OOPS !! Location Not Found </p>
    </div>
  )
}

export default error