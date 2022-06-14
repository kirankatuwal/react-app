import React from "react";
import ReactDOM from "react-dom";
import './style.css';

const App = () => {
    return <div>
        <h1>Hello world</h1>
        <p>Those are my lines</p>
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"));