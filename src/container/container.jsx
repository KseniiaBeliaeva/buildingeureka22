import React from "react";
import ReactDOM from "react-dom";
import Menu from "../menu/menu";
import "./container.css";
import houseplan from "./Eureka22.png";

export default class Container extends React.Component {
    render() { 
        return (

            <div className="container text-center" id="body">
                <div className="img-responsive">
                    <img src={houseplan} alt="Eureka 22 house plan" />
                </div>
                <a className="btn btn-dark houseplan-brochure" target="_blank" href="https://vic.homebuyers.com.au/sites/default/files/home_design/slab_brochure/EUREKA22.pdf">
                    Watch the house plan
                 </a>
                
            </div>    
    
        )
    }
}

