import { useContext } from "react"
import { dataContext } from "./CompA"

const CompD = () => {
    const data = useContext(dataContext)
    return (
        <>
            <h3>Component D</h3>
            <p>Name: {data.u.name}</p>
            {data.f()}
        </>
    )
}

export default CompD;