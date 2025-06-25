import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/localSotrageData";
import { useNavigate, useParams } from 'react-router';

const EditEmployee = () => {
    const {id} = useParams();
    const navigate =  useNavigate();
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

  const handleChanged = (e) => {
    const {name, value} = e.target;
    setInputForm({
        ...inputForm,
        [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let empData = getStorageData();

    let updateData = empData.map(emp => {
        if(emp.id == id){
            return inputForm
        }else{
            return emp
        }
    })

    setStorageData(updateData);
    setInputForm(intialState);
    navigate("/");
  }

  useEffect(()=> {
    let data = getStorageData();
    let signleRec = data.find(emp => emp.id == id);
    console.log(signleRec)
    setInputForm(signleRec)
  }, [id]);
    return(
        <>
            <h1>Edit Employee</h1>
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

            <Button type="submit">Update Employee</Button>
          </Form>
        </>
    )
};

export default EditEmployee;