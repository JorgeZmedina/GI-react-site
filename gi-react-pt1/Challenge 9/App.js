import React from "react";

import Todo from '/Todo';
import './styles.css';

const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];
//hardcoded info

//...
export default function App() {
    return (
        <ul>
            {DUMMY_TODOS.map(todo => <Todo text={todo} />)}
        </ul>
    );
}

//using the .map (still learning this). but essentially can pull and add to a new array to output info provided by the user