import React from 'react'
import Lottie from 'lottie-react'
import loadingLottie from "../assets/lottie/New Lottie/Loading.json"

function loading() {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
    <Lottie animationData={loadingLottie} style={{height:"50vh",width:"100vw"}}></Lottie>
    <p style={{marginTop:"2%",marginLeft:"5%",fontSize:"20px"}}> Searching.... </p>

    </div>
  )
}

export default loading