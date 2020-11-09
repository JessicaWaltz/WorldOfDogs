import React, { Component } from 'react';
import sadDog from "../img/sadDog.png";
import "../style/notFound.css";
class NotFound extends Component{
    render(){
        return(
            <div>
            <div className="not-found">
            <img className="sad-dog" src={sadDog} alt="Sad Dog"/>
            </div>
            <div className="not-found">404 Page not found</div>
            </div>
        )
    }
}
export default NotFound;