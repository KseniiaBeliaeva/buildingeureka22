import React from 'react';
import ReactDOM from "react-dom";
import "./wrapper.css";
import eureka from "./eureka.jpg";

export default class Wrapper extends React.Component {
    render() {
        return (
            <div className="wrap text-center">
                <img src={eureka} alt="Eureka 22 traditional design" className="wrap__img" />
            </div>
        )
    }
}
