import Box from "./Box";
import Info from "./Info";
import { useState } from "react";
function WeatherBox(){
    let [wInfo, setWInfo] = useState({
        city : "mumbai",
        temp : 89,
        humidity : 90,
        tempMin: 80,
        tempMax: 890,
        feelsLike: 90,
        Weather : "maze"

    })
    let updateInfo = (info)=>{
        setWInfo(info)
    }
    let clikc = ()=>{
        console.log(wInfo)
    }
    return(
        <>
       
        <h1 style={{textAlign: "center"}}>Weather App</h1>
        <Box updateInfo={updateInfo}/>
        <Info info={wInfo}/>
        </>
    )
}
export default WeatherBox