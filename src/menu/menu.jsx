import React from 'react';
import ReactDOM from "react-dom";
import "./menu.css";


export default class Menu extends React.Component {
    render() {
        return (
            <div className="row" id="menu">
                <nav className="navbar navbar-light bg-dark navbar-expand-md" id="nav_menu" role="navigation" >
                    <a href="#menu" className="navbar-brand nav-link nav_menu-link text-white justify-content-start">Eureka 22</a>    
                    <a href="#menu" className="navbar-nav nav-link nav_menu-link text-white">Updates</a>
                    <a href="#menu" className="navbar-nav nav-link nav_menu-link text-white ">Photos</a>
                        <a href="#menu" className="navbar-nav nav-link nav_menu-link text-white ">Plans</a>
                </nav>
            </div>
        )
    }
}
