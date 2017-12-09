import React from 'react';
import ReactDOM from "react-dom";
import Houseplan from "./houseplan/houseplan";
import Menu from "./menu/menu";
import Wrapper from "./wrapper/wrapper";
import './styles.css';


class Main extends React.Component {
    render() {
        return (
            <div className="container">
               <Menu />
                <Wrapper />
                <Houseplan /> 
            </div>
        );
    }
}
ReactDOM.render(<Main />, document.getElementById('root'));