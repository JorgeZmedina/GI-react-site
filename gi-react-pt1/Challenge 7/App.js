import React from "react";

import './styles.css';

//...
export default function App() {
    const [messageValidity, setMessageValidity] = React.useState('Invalid');

    function messageChangeHandler(event) {
        const value = event.target.value;
        if (value.trim().lenght < 3) {
            setMessageValidity('Invalid')
        } else {
            setMessageValidity('Valid')
        }
    }
    //hook catches errors

    return (
        <form>
            <label>Your mesage</label>
            <input type="text" onChange={messageChangeHandler} />
            <p>{messageValidity} message</p>
        </form>
    )
}
//onchange event triggered to reveal weather invalid or valid and reveal the message.