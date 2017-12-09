import React from 'react';
import ReactDOM from "react-dom";
import Menu from "../menu/menu";
import "../styles.css";
import Dates from "../dates/dates";

class Updates extends React.Component {
    render() {
        return (
            <div className="container">
                <Menu />
                <Dates />
            </div>
        )
    }
}
ReactDOM.render(<Updates />, document.getElementById('root'));