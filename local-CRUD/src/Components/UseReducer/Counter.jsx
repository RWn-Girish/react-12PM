import { useReducer, useState } from "react"
import { Button } from "react-bootstrap";
import { countReducer } from "./countReducer";

const Counter = () => {
    // const [count, setCount] = useState(10);
    const [count, dispatch] = useReducer(countReducer, 10)
    const handleInc = () => {
        dispatch({
            type: "INC"
        })
    }
    const handleDec = () => {
        dispatch({
            type: "DEC"
        })
    }
    return (
        <>
            <h1>Counter App: {count}</h1>
            <Button onClick={handleInc}>Incrment</Button>
            <Button onClick={handleDec}>Decrment</Button>
        </>
    )
};

export default Counter;