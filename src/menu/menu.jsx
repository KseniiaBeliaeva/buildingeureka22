import React from 'react';
import ReactDOM from "react-dom";
import "./menu.css";


export default class Menu extends React.Component {
    render() {
        return (
            <div className="row" id="menu">
                <nav className="navbar navbar-light bg-faded navbar-expand-md justify-content-end" id="nav_menu" role="navigation" >
                    <a href="#menu" className="navbar-brand nav-link nav_menu-link">Updates</a>
                    <a href="#menu" className="navbar-brand nav-link nav_menu-link">Photos</a>
                    <a href="#menu" className="navbar-brand nav-link nav_menu-link">Plans</a>
                </nav>
            </div>
        )
    }
}
