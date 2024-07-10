// updater function  = passes as an argument to setState() usually ex. setYear(arrow function)
// Allow for safe updates based on the previous state 
// Used with multuple state updates and asynchronous functions 
// Good practice to use updater functions.

import React, {useState} from "react";

function MyComponent(){
    const[count,setCount] = useState(0);

    function increment(){
        // Uses the CURRENT state to calculate the NEXT state
        // set functions do not trigger an update
        // React batches together state updates for performance reasons.
        // NEXT state becomes the CURRENT state after an update
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    };

    function decrement(){
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
    };

    function reset(){
        setCount(0);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
export default MyComponent