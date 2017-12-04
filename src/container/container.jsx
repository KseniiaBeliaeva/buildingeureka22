import React from "react";
import ReactDOM from "react-dom";
import Menu from "../menu/menu";
import "./container.css";


export default class Container extends React.Component {
    render() { 
        return (

            <div className="container" id="body">
            <h2>Eureka22 by Homebuyers Center</h2>
            <Menu />    
            </div>    
    
        )
    }
}

