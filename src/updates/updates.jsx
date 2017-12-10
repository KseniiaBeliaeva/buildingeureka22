import React from 'react';
import ReactDOM from "react-dom";
import Menu from "../menu/menu";
import "../styles.css";
import Dates from "../dates/dates";
import Footer from "../footer/footer";

class Updates extends React.Component {
    render() {
        return (
            <div className="container">
                <Menu />
                <div className="row">
                    <Dates />
                </div>   
                <Footer />
            </div>
        )
    }
}
ReactDOM.render(<Updates />, document.getElementById('root'));