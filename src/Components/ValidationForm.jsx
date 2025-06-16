import { useState } from "react";

const ValidationForm = () => {
    const [inputForm, setInputForm] = useState({
        fname: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    const handleChanged = (e) => {
        const {name, value} = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        })
    }

    const validation = () => {
        let formError = {};

        if(inputForm.fname == ""){
            formError.fname = "Full name is Required!"
        }
        if(inputForm.email == ""){
            formError.email = "Email is Required!"
        }
        if(inputForm.password == ""){
            formError.password = "password is Required!"
        }else if(inputForm.password.length <=5){
            formError.password = "password is minimum length is 6."
        }

        setErrors(formError);
        
        if(Object.keys(formError).length > 0){
            return false
        }else{
            return true;
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(validation()){
            console.log("Submit", inputForm);
            setInputForm({
                 fname: "",
                email: "",
                password: ""
            })
        }
    }
  return (
    <>
      <h1>Validation Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Full Name: </label>
        <input style={{borderColor: errors.fname ? "red" : ""}} type="text" placeholder= {errors.fname ? errors.fname : "Enter Full Name"} name="fname" value={inputForm.fname} onChange={handleChanged} />
        <span style={{color: "red"}}>{errors.fname ? errors.fname : ""}</span>
        <br />
        <br />
        <label>Email: </label>
        <input type="text" placeholder="Enter Email" name="email" value={inputForm.email} onChange={handleChanged} />
         <span style={{color: "red"}}>{errors.email ? errors.email : ""}</span>
        <br />
        <br />
        <label>Password: </label>
        <input type="text" placeholder="Enter Password" name="password" value={inputForm.password} onChange={handleChanged} />
         <span style={{color: "red"}}>{errors.password ? errors.password : ""}</span>
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default ValidationForm;
