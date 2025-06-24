import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { getStorageData } from "../Services/localSotrageData";

const Home = () => {
    const [employees, setEmployees] = useState([]);
    const handleEdit = (id) => {
        
    }
    const handleDelete = (id) => {

    }

    useEffect(()=> {
        let data = getStorageData(); 
        setEmployees(data)
    }, [])
    return (
        <>
            <h1 className="mt-3">Employees Detatils</h1>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Mobile No</th>
                        <th>Role</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(emp => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.fname}</td>
                                <td>{emp.email}</td>
                                <td>{emp.gender}</td>
                                <td>{emp.mobileNo}</td>
                                <td>{emp.role}</td>
                                <td><Button onClick={()=>handleEdit(emp.id)} variant="warning">Edit</Button></td>
                                <td><Button onClick={()=>handleDelete(emp.id)} variant="danger">Delete</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
};

export default Home;