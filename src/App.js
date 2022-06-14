import Button from "./Button";
import Counter from "./Counter";
import React, { useState } from "react";
const App = () => {
    const [number, setNumber] = useState(0);
    return <div>
        <h1>Hello world</h1>
        <p>Those are my lines</p>
        <Button name="Google" link="https://google.com" />
        <Button name="Bing" link="https://bing.com" />
        <br></br>
        counter APP
        <Counter />
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)} className="btn">Add</button>
            <button onClick={() => setNumber(number - 1)} className="btn">Less</button>
            <button onClick={() => setNumber(0)} className="btn">Reset</button>
        </div>

    </div>
}

export default App;