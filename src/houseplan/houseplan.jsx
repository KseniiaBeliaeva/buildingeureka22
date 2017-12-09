import React from "react";
import ReactDOM from "react-dom";
// import Menu from "../menu/menu";
import "./houseplan.css";
import houseplan from "./Eureka22.png";

var houseDescription = {
    img: houseplan,
    brochurelink: "https://vic.homebuyers.com.au/sites/default/files/home_design/slab_brochure/EUREKA22.pdf",
    brochureTitle: "Watch the house plan",

}
export default class Houseplan extends React.Component {
    render() { 
        return (

            <div className="container text-center" id="body">
                <div className="img-responsive">
                    <img src={houseDescription.img} alt="Eureka 22 house plan" />
                </div>
                <a className="btn btn-dark houseplan-brochure" target="_blank" href={houseDescription.brochurelink}>
                    {houseDescription.brochureTitle}    
                 </a>
                
            </div>    
    
        )
    }
}

