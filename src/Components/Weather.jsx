import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Weather() {
    const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const baseKey = 'a2e9598efeed1ffda20eb3001bc7f53b';
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  const getWeatherData = async () => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          q: city,
          appid: baseKey,
          
        },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className='container fluid'>

               <h1 className='text-center mt-4 text-dark'>Weather App</h1>
                <center>   <input className='mt-4' type="text" placeholder="Enter your place" value={city} onChange={(e) => setCity(e.target.value)}/></center> 
    <center> <Button variant="danger" className='mt-4 ' onClick={getWeatherData}>Click me</Button>{' '}</center> 
      {weatherData && (
        <div className='container fluid text-center text-danger'>
         
          
        <center>
          <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title> <h2 className='text-dark'>{weatherData.name}, {weatherData.sys.country}</h2></Card.Title>
        <Card.Text className='text-dark'>
       <p> Latitude and Longitude:{weatherData.coord.lon},{weatherData.coord.lat}</p>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </Card.Text>
        
      </Card.Body>
    </Card></center> 
        </div>
      )}

    </div>
  )
}

export default Weather