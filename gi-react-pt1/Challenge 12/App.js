import React from "react";

export default function App() {
    const [highlighted, setHighlighted] = React.useState(false);

    function clickHandler() {
        setHighlighted(isHighlighted => !isHighlighted);
    }

    return (
        <div>
            <p className={highlighted ? 'active' : ''}>Style me!</p>
            <button onClick={clickHandler}>Toggle Style</button>
        </div>
    );
}

// using CSS class dynamically - instead of an inline style.