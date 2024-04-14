import React from 'react'
import Lottie from 'lottie-react'
import errorLottie from "../assets/lottie/error.json"


function error() {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" , }}>
    <Lottie animationData={errorLottie} style={{height:"50vh",width:"100vw"}}></Lottie>
    <p style={{marginTop:"2%",marginLeft:"5%",fontWeight:"bolder",fontSize:"35px"}}>Location Not Found </p>
    </div>
  )
}

export default error