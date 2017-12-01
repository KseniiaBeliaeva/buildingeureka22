import React from 'react';
import ReactDOM from "react-dom";
import Container from "./components/container";


class Main extends React.Component {
    render() {
        return (
            <div>
                <Container />
             <h1>Back</h1>
            </div>
        );
    }
}



ReactDOM.render(<Main />, document.getElementById('root'));