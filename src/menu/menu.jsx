import React from 'react';
import ReactDOM from "react-dom";
import "./menu.css";


export default class Menu extends React.Component {
    render() {
        return (
            <div className="row" id="menu">
                <div className="col-sm-6"></div>    
                <button className="col-sm-2">Plan</button>
                <button className="col-sm-2">News</button>
                <button className="col-sm-2">Photos</button>
            </div>
        )
    }
}
