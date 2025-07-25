import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signUpAsync } from "../../Services/actions/userAction";

const SignUP = () => {
  const { isSignUP, errMSG } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
  });

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Sign Up Success", inputForm);
    dispatch(signUpAsync(inputForm));
  };

  useEffect(()=> {
    if(isSignUP){
      navigate("/signIn");
    }
  }, [isSignUP]);
  return (
    <>
      <h1>Sign Up Now</h1>
      {errMSG ? <p>{errMSG}</p> : ""}
      <Form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">
            Email:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="email"
              value={inputForm.email}
              onChange={handleChanged}
              placeholder="Enter Email"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">
            Password:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="password"
              value={inputForm.password}
              onChange={handleChanged}
              placeholder="Enter Password"
            />
          </Col>
        </Form.Group>

        <Button type="submit">SignUp</Button>
      </Form>
      <p>
        Have an account? <Link to={"/signIn"}>SignIn</Link>
      </p>
    </>
  );
};

export default SignUP;
