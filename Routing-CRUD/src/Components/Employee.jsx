import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import generateUniqueId from "generate-unique-id";

const getStorageData = () => {
  return JSON.parse(localStorage.getItem("employees")) || [];
};

const Employee = () => {
  const intialState = {
    id: "",
    fname: "",
    email: "",
    gender: "",
    password: "",
    role: "",
    mobileNo: "",
  };
  const [inputForm, setInputForm] = useState(intialState);
  const [employees, setEmployees] = useState(getStorageData());
  const [isEdit, setIsEdit] = useState(false);

  const handleChanged = (e) => {
    const { name, value } = e.target;

    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // let id = Math.floor(Math.random() * 100000);
    if(isEdit){
      let updateRecords = employees.map(emp => {
        if(emp.id == inputForm.id){
          return inputForm;
        }else{
          return emp;
        }
      });

      setEmployees(updateRecords);
      setIsEdit(false);

    }else{
      let id = generateUniqueId({ length: 6, useLetters: false });
      inputForm.id = id;
      console.log("Submit", inputForm);
      setEmployees([...employees, inputForm]);
    }
    setInputForm(intialState);
  };

  const handleDelete = (id) => {
    let deleteRecords = employees.filter(emp => emp.id != id);
    setEmployees(deleteRecords);
  }
  
  const handleEdit = (id) => {
    let record = employees.find(emp => emp.id == id);
    setInputForm(record);
    setIsEdit(true);
  }

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);
  return (
    <Container>
      <h1>Naykaa Management</h1>
      <Row>
        <Col sm={5}>
          <h1>Add Employee</h1>
          <Form className="mt-4" onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Full Name
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  name="fname"
                  value={inputForm.fname}
                  onChange={handleChanged}
                  placeholder="Enter Your Full Name"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Email
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="email"
                  name="email"
                  value={inputForm.email}
                  onChange={handleChanged}
                  placeholder="Enter Your Email"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Password
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="password"
                  name="password"
                  value={inputForm.password}
                  onChange={handleChanged}
                  placeholder="Enter Your Password"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Gender
              </Form.Label>
              <Col sm="5">
                <Form.Check
                  inline
                  label="Male"
                  name="gender"
                  type="radio"
                  value={"Male"}
                  onChange={handleChanged}
                  checked={inputForm.gender == "Male" ? true : false  }
                />
                <Form.Check
                  inline
                  label="Female"
                  name="gender"
                  type="radio"
                  value={"Female"}
                  onChange={handleChanged}
                  checked={ inputForm.gender == "Female" ? true : false }
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Mobile No
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  name="mobileNo"
                  value={inputForm.mobileNo}
                  onChange={handleChanged}
                  placeholder="Enter Your Mobile No"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Role
              </Form.Label>
              <Col sm="9">
                <Form.Select name="role" onChange={handleChanged}>
                  <option>Select Role</option>
                  <option value="Admin" selected = {inputForm.role == "Admin"}>Admin</option>
                  <option value="HR Manager" selected = {inputForm.role == "HR Manager"}>HR Manager</option>
                  <option value="Sales manager" selected = {inputForm.role == "Sales manager"}>Sales manager</option>
                  <option value="Employee" selected = {inputForm.role == "Employee"}>Employee</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Button type="submit">{isEdit ? "Update" : "Add"} Employee</Button>
          </Form>
        </Col>
        <Col>
          <h1>Emp Details</h1>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Gender</th>
                <th>Role</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.fname}</td>
                  <td>{emp.email}</td>
                  <td>{emp.mobileNo}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.role}</td>
                  <td><Button onClick={()=> handleEdit(emp.id)} variant="warning">Edit</Button></td>
                  <td><Button onClick={()=> handleDelete(emp.id)} variant="danger">Delete</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Employee;
