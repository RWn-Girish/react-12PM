import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/localSotrageData";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [searchVal, setSearchVal] = useState("");
    const handleEdit = (id) => {
        navigate(`/edit-employee/${id}`)
    }
    const handleDelete = (id) => {
        let filterData = employees.filter(emp => emp.id != id);
        setStorageData(filterData);
        setEmployees(filterData);
    }

    const handleSearch = () => {
        let searchData = employees.filter(emp => {
            return emp.fname == searchVal || emp.gender == searchVal
        })
        // console.log(searchData);
        setEmployees(searchData);
        setSearchVal("");
    }
    const handleClear = () => {
        let data = getStorageData();
        setEmployees(data);
    }

    const handleSort = (field, type) => {
        let sData = getStorageData();
        let data;
        if(type == 'asc'){
            data = sData.sort((a ,b) => {
            return a[field].localeCompare(b[field])
        })
        }else{
           data = sData.sort((a ,b) => {
            return b[field].localeCompare(a[field])
        }) 
        }
        setEmployees(data);
    }

    // const handleASC = () => {
    //     let sData = getStorageData();
    //     let data = sData.sort((a ,b) => {
    //         return a.fname.localeCompare(b.fname)
    //     })

    //     setEmployees(data);
    // }
    
    // const handleDESC = () => {
    //     let sData = getStorageData();
    //     let data = sData.sort((a ,b) => {
    //         return b.fname.localeCompare(a.fname)
    //     })
    //     setEmployees(data); 
    // }

    // console.log("Emp ===> ", employees);
    useEffect(()=> {
        let data = getStorageData(); 
        setEmployees(data)
    }, [])
    return (
        <>
            <h1 className="mt-3">Employees Detatils</h1>
            <div>
                <input type="text" name="search" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
                <Button className="m-2" onClick={handleSearch} >Search</Button>
                <Button className="m-2" onClick={handleClear} >Clear</Button>
            </div>
            {/* <div>
                <Button onClick={handleASC} className="m-2">A-Z</Button>
                <Button onClick={handleDESC}  className="m-2">Z-A</Button>
            </div> */}
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name <Button onClick={()=> handleSort('fname', 'asc')} className="m-2" variant="warning">⬆</Button> <Button onClick={()=> handleSort('fname', 'desc')} className="m-2" variant="info">⬇</Button></th>
                        <th>Email <Button onClick={()=> handleSort('email', 'asc')} className="m-2" variant="warning">⬆</Button> <Button onClick={()=> handleSort('email', 'desc')} className="m-2" variant="info">⬇</Button></th>
                        <th>Gender <Button onClick={()=> handleSort('gender', 'asc')} className="m-2" variant="warning">⬆</Button> <Button onClick={()=> handleSort('gender', 'desc')} className="m-2" variant="info">⬇</Button></th>
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