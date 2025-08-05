import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signInAsync, signINWithGoogleAsync } from "../../Services/actions/userAction";
import { toast, ToastContainer } from "react-toastify";

const SignIN = () => {
  const { user, errMSG } = useSelector((state) => state.userReducer);
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
    // console.log("Sign In Success", inputForm);
    dispatch(signInAsync(inputForm));
  };

  const hanldeSignInGoogle = () => {
    dispatch(signINWithGoogleAsync())
  }
  useEffect(() => {
    if (user) {
      toast.success("Login Success");
      setTimeout(()=> {
        navigate("/")
      }, 1500);
    };
  }, [user]);
  return (
    <>
      <h1>Sign IN Now</h1>
      <ToastContainer />
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

        <Button type="submit">SignIn</Button>
      </Form>
      <br/>
        <Button onClick={hanldeSignInGoogle} variant="danger">SignIN With Google </Button>
      <p>
        Create a New Account? <Link to={"/signUp"}>SignUp</Link>
      </p>
    </>
  );
};

export default SignIN;
