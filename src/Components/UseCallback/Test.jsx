import { memo, useMemo } from "react";

const Test = memo(() => {

    const values = useMemo(() => {
        let sum = 0;
        for(let i = 1; i<=15201100; i++){
            sum = sum + i;
        }
        return sum;
    }, [])
    console.log("Test Comp Called...");
    return (
        <>
            <p>total Values: {values}</p>
        </>
    )
});

export default Test;