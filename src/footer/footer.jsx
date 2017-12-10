import React from 'react';
import ReactDOM from "react-dom";
import "../styles.css";

export default class Footer extends React.Component { 
    render() { 
        return (
            <div className="container-fluid text-center bg-light footer">
                <p className="footer-block text-info footer-text">Kseniia B., 2017</p>
            </div>
        )
    }
}