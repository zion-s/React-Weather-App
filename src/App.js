import React from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '049f89bf7f23861c32e0026f97347a2d';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      temperature:undefined,
      description:undefined,
      city:undefined,
      country:undefined,
      error:undefined
    }
    this.getWeather=this.getWeather.bind(this);
  }
  async getWeather(e){
    e.preventDefault();
    const CITY = e.target.elements.city.value;
    const COUNTRY = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&appid=${API_KEY}`);
    const data = await api_call.json();
    if(CITY){
      console.log(data);
      this.setState({
        temperature:data.main.temp,
        description:data.weather[0].description,
        city:data.name,
        country:data.sys.country,
        error:""
      })
    } else{
      this.setState({
        temperature:undefined,
        description:undefined,
        city:undefined,
        country:undefined,
        error:"Please enter a location"
      })
    }
}

  render(){
    return(
      <div className="container py-5">
        <Form getWeather = {this.getWeather}/>
        <Weather temperature={this.state.temperature} 
                  description={this.state.description}
                  city={this.state.city}
                  country={this.state.country}
                  error={this.state.error} />
      </div> 
    );
  }
};
