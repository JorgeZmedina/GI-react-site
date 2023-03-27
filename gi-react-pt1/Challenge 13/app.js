import React from "react";

import './styles.css';

//...
export default function() {
    const clickHandler = () => {
        console.log('Clicked!');
    };

    return (
        <div>
            <h2>You're logged in!</h2>
            <p>Welcome to your user profile!</p>
            <button onClick={clickHandler}>Click me!</button>
        </div>
    );
}

//syntax fix