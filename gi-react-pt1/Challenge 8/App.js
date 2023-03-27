import React from "react";

import './styles.css';

//...
export default function App() {
    const [counter, setCounter] = React.useState(0);

    function incrementCounterHandler() {
        setCounter(prevCounter => prevCounter + 1);
    }
    //incrementer. my fav thing in react

    return (
        <div>
            <p id="counter">{counter}</p>
            <button onClick={incrementCounterHandler}>Increment</button>
        </div>
    );
}

//displaying the counter