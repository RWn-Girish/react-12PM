import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import  generateUniqueId  from 'generate-unique-id';
import { getStorageData, setStorageData } from "../Services/localSotrageData";
import { useNavigate } from 'react-router';

const AddEmployee = () => {
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
    let id = generateUniqueId({ length: 6, useLetters: false });
    inputForm.id = id;
    let empData = getStorageData();
    empData.push(inputForm);
    setStorageData(empData);
    setInputForm(intialState);
    navigate("/");
  }
    return(
        <>
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
                />
                <Form.Check
                  inline
                  label="Female"
                  name="gender"
                  type="radio"
                  value={"Female"}
                  onChange={handleChanged}
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
                  <option value="Admin" >Admin</option>
                  <option value="HR Manager" >HR Manager</option>
                  <option value="Sales manager" >Sales manager</option>
                  <option value="Employee" >Employee</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Button type="submit">Add Employee</Button>
          </Form>
        </>
    )
};

export default AddEmployee;