import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "src/index.jsx";

class Container extends React.Component { 
    render() { 
        return <div className="container">Hi</div>;
    }
}
ReactDOM.render(<Container />,document.getElementById('root'));