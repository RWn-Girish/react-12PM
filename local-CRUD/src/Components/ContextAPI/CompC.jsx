import { useContext } from "react";
import { dataContext } from "./CompA";
import CompD from "./ComD";

const CompC = () => {

    const data = useContext(dataContext)

    return (
        <>
            <h3>Componenet C</h3>
            <p>Age: {data.u.age}</p>

            <CompD />
        </>
    )
};

export default CompC;