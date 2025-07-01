import { useCallback, useState } from "react";
import ButtonComp from "./Button";
import Test from "./Test";

const CounterComp = () => {
    const [count, setCount] = useState(0);

    const handleInc = useCallback(() => {
        setCount(count => count + 1)
    }, []);

    const handleDec = useCallback(() => {
        setCount(count => count - 1)
    }, [])
    return (
        <>
            <h2>Hello Counter App : {count}</h2>
            <Test />
            {/* <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button> */}


            <ButtonComp name={"Inc"} handleClick={handleInc} />
            <ButtonComp name={"Dec"} handleClick={handleDec} />
        </>
    )
};

export default CounterComp;