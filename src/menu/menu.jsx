import React from 'react';
import ReactDOM from "react-dom";
import "./menu.css";

var menuItems = [
        {
            menuItemName: "Eureka 22",
            link: "index.html",
        },
        {
            menuItemName: "Updates",
            link: "updates.html",
        },
        {
            menuItemName: "Photos",
            link: "photos.html",
        },
];

export default class Menu extends React.Component {
    render() {
        return (
            <div className="row" id="menu">
                <nav className="navbar navbar-light bg-dark navbar-expand-md" id="nav_menu" role="navigation">
                    
                    {menuItems.map((menuBlock) =>
                        <a href={menuBlock.link} key={menuBlock.menuItemName} className="navbar-nav nav-link nav_menu-link text-white">
                            {menuBlock.menuItemName}
                        </a>
                    )}
                </nav>
            </div>
        )
    }
}
