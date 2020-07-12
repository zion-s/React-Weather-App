import React from 'react';
import './form.style.css';

export default class Form extends React.Component{
    render(){
        return(
            <div className="form-display row justify-content-center">
                <form className="form-group" onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="Enter city" className="locationBox border-0" />
                    <input type="text" name="country" placeholder="Enter country" className="locationBox border-0" />
                    <button className="btn btn-light">Get Weather</button>
                </form>
            </div>
        )
    }
}