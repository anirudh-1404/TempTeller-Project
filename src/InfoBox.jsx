import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox ({ info }) {
    const INIT_URL = 
    "https://images.unsplash.com/photo-1561484930-974554019ade?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://media.istockphoto.com/id/137199031/photo/sun-in-the-blue-sky-with-lensflare.webp?a=1&b=1&s=612x612&w=0&k=20&c=Fai80s7EOp9OeU3lVN_iQAc-SMpdzwm0SDvAQ_yYFXk=";
    const COLD_URL = "https://media.istockphoto.com/id/460682111/photo/panorama-of-the-winter-sunrise-in-mountains.webp?a=1&b=1&s=612x612&w=0&k=20&c=rghBd2CE3FhnpNaUyq5bQizch0LvmRFcv8MP2bkSsaY=";
    const RAINY_URL = "https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return  (
        <div className='InfoBox'>
        {/* <h2>Weather Information - {info.weather}</h2> */}
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAINY_URL : info.temp > 15  ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {
          info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</p>
        </Typography>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>
        </div>
        </div>
    )
}