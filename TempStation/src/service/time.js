
// function epochConverter(utcSeconds){
//     let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
//     return d.setUTCSeconds(utcSeconds);    
// }



function epochConverter(utcSeconds){
    // utcSeconds = epoch timestamp
    // returns date obj
    return new Date(utcSeconds*1000).toLocaleTimeString();
}

export default epochConverter