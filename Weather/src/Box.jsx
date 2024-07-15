
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Box.css"
import { useState } from 'react';
function Box({updateInfo}){
    let [city, setCity] = useState("")
    let [err,setErr] = useState(false)
    let API_URL ="https://api.openweathermap.org/data/2.5/weather"
    let API_KEY =  "d2e39f9acf59fd4b8736ae222d74716e"
    let WeatherInfo = async ()=>{
        try{
        let Info = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let Response = await Info.json()
        let result = {
            city : city,
            temp : Response.main.temp,
            humidity : Response.main.humidity,
            tempMin: Response.main.temp_min,
            tempMax: Response.main.temp_max,
            feelsLike: Response.main.feels_like,
            Weather : Response.weather[0].description
        }
       return result}
       catch(error){
        throw error
       }
   
    }
    let Change = (eve)=>{
        setCity(eve.target.value)
    }
    let submit = async (eve)=>{
        try{
        eve.preventDefault()
        setCity("")
        let info = await WeatherInfo()
        updateInfo(info)
        setErr(false)
    }
        catch(Error){
            setErr(true)
        }

    }
    return(
        <div className="Box">
            <h2>Search Box</h2>
            <form>
            <TextField id="outlined-basic" label="Search City" variant="outlined" value={city} onChange={Change} required />
            <br/>
            <br/>
            <Button variant="contained" type="submit" onClick={submit}>Search</Button>
            {err && <p>No such place exists</p>}
            </form>
        </div>
    )
}
export default Box;