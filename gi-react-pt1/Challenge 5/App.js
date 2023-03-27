import React from "react";

import './styles.css'
//...
export default function App() {
    const clickHanger = () => {
        console.log('Stored');
    }

    return <button onClick={clickHanger}>Bookmark</button>
}