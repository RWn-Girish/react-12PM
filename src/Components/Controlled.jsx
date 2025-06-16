import { useState } from "react";

const Controlled = () => {
    let [fname, setFname] = useState("");
    let [email, setEmail] = useState("");
    let [pass, setPass] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.warn('Form Submit..');
        console.warn('Fname: => ', fname);
        console.warn('Email: => ', email);
        console.warn('Password: => ', pass);

    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    
    const handlePass = (e) => {
        setPass(e.target.value)
    }

  return (
    <>
      <h1>Controlled Comp</h1>
      <form onSubmit={handleSubmit}>
        <label>Full Name: </label>
        <input type='text' placeholder="Enter Full Name" name="fname" value={fname} onChange={(e)=> setFname(e.target.value)} />
        <br />
        <br />
        <label>Email: </label>
        <input type='text' placeholder="Enter Email" name="email" value={email} onChange={handleEmail} />
        <br />
        <br />
        <label>Password: </label>
        <input type='text' placeholder="Enter Password" name="pass" value={pass} onChange={handlePass} />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Controlled;
