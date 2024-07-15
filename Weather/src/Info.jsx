import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import "./Info.css"
function Info({info}){
    let cold_url= "https://image.telanganatoday.com/wp-content/uploads/2023/01/Temperature_V_jpg--442x260-4g.webp?sw=412&dsz=442x260&iw=412&p=false&r=2.625"
    let hot_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7EW6BB4OScjLEnDoSwF6ZafbMcqiO44tGw&s"
    let rain_url="https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg"
   
    if(info.humidity>80){
        Image = rain_url;
        
    }
    else if (info.temp<15){
        Image = cold_url
        
    }
    else {
        Image = hot_url
       
    }
    return(
        <div className="WeatherBox">
            <h1>Weather - {info.Weather} </h1>
            <div className='Card'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia component="img" alt="Weather" height="140" image={Image}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{info.city}</Typography>
                        <Typography variant="body2" color="text.secondary" component="span">
                            <p>Temp : {info.temp}&deg;</p>
                            <p>Humidity : {info.humidity}</p>
                            <p>Maximum Temperature : {info.tempMax}&deg;</p>
                            <p>Minimum Temperature : {info.tempMin}&deg;</p>
                            <p>FeelsLike : {info.feelsLike}</p>
                        </Typography>
                    </CardContent>
                </Card>
                </div>
        </div>
    )
}
export default Info