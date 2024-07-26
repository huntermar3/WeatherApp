import axios from 'axios'
import React, {useState} from 'react'


function App() {

  const[data, setData ] = useState({}) ;
  const[location , setLocation] = useState('');
  const url = 'http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=199f412b0f89bc5a0c5af64dc8297c12'

  /*
const searchLoco = (event) => {
  if(event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    } )

    setLocation('')
  }
}
*/

const search = async () => {
  const element = document.getElementsByClassName("search-bar") ;
  if(element[0].value === "") {
    return 0 ;
  }

  let response = await fetch(url);
  let data = await response.json();
  const humidity = document.getElementsByClassName("humidity")
  const wind = document.getElementsByClassName("wind")
  const temp = document.getElementsByClassName("temperature")
  const location = document.getElementsByClassName("city")

  humidity[0].innerHTML = data.main.humidity;
  wind[0].innerHTML = data.wind.speed;
  temperature[0].innerHTML = data.main.temp;
  location[0].innerHTML = data.name ;
}

const handleInputChange = (event) => {
  setLocation(event.target.value);
};

  return (
    <div className = "app">
      <div className = "search-bar" >
        <input 
        onChange = {handleInputChange}
        placeholder = 'Please enter a city. '
        value = {location}
        type = "text"/>
      </div>
      <button onClick = {search}>Search</button>
      <div className = "container">
        <div className = "top-bar" >

          <div className = "city" >
            <p> Garden City</p>
          </div>

          <div className = "temperature" >
            <h1>30&deg;F</h1>
          </div>

          <div className = "type_weather">
            <p> sunny as hell</p>
          </div>

        </div>
       
        <div className = "bottom-bar">

        <div className = "feels_like" >
        <p className = "bold"> 35&deg;F</p>
        <p>Feels like</p>
        </div>

       <div className = "humidity">
        <p className = "bold"> 6%</p>
        <p>Humidity</p>
        </div>

      <div className = "wind">
        <p className = "bold">6 mph</p>
        <p>Wind speed</p>

      </div>

      </div>
    </div>
    </div>

  ) ;
}

export default App
