import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "indexjsx";

class Container extends React.Component { 
    render() { 
        return <div className="container">Hi</div>;
    }
}
ReactDOM.render(<Container />,document.getElementById('root'));