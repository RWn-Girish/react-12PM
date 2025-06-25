import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/localSotrageData";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const handleEdit = (id) => {
        navigate(`/edit-employee/${id}`)
    }
    const handleDelete = (id) => {
        let filterData = employees.filter(emp => emp.id != id);
        setStorageData(filterData);
        setEmployees(filterData);
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