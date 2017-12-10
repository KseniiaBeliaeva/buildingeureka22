import React from 'react';
import ReactDOM from "react-dom";
import Houseplan from "./houseplan/houseplan";
import Menu from "./menu/menu";
import Wrapper from "./wrapper/wrapper";
import './styles.css';
import Footer from "./footer/footer";


class Main extends React.Component {
    render() {
        return (
            <div className="container">
               <Menu />
                <Wrapper />
                <Houseplan /> 
                <Footer />
            </div>
        );
    }
}
ReactDOM.render(<Main />, document.getElementById('root'));