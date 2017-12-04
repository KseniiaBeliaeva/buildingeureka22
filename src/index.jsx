import React from 'react';
import ReactDOM from "react-dom";
import Container from "./container/container";
import Menu from "./menu/menu";
import './styles.css';


class Main extends React.Component {
    render() {
        return (
            <div>
                <Container />
            </div>
        );
    }
}



ReactDOM.render(<Main />, document.getElementById('root'));