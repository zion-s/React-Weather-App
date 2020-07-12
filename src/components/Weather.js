import React from 'react';
import './weather.style.css';

export default class Weather extends React.Component{
    render(){
        if(this.props.city){
        return(
            // <div className="justify-content-center">
            //     <p>London UK{this.props.city} {this.props.country}</p>
            //     <p>299.15{this.props.temperature}</p> 
            //     <p>still cloudy{this.props.description}</p>
            //     <p>{this.props.error}</p>
            // </div>
            <div className="card w-60 border-0 py-5">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-center border-0 py-0">{this.props.error}</li>
                    <li className="list-group-item text-center border-0 py-5">{this.props.city} {this.props.country}</li>
                    <li className="list-group-item text-center border-0 py-5">{this.props.temperature}&deg;</li>
                    <li className="list-group-item text-center border-0 py-5">{this.props.description}</li>
                </ul>
            </div>
        )}else{
            return null;
        }
    }
}