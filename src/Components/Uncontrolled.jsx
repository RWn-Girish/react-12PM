import { useRef } from "react";

const Uncontrolled = () => {
    let fnameRef = useRef("");
    let emailRef = useRef("");
    let passRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form Submit');
        console.log('Fname: => ',fnameRef.current.value);
        console.log('Email: => ',emailRef.current.value);
        console.log('Password: => ', passRef.current.value);
    }

    return (
        <>
            <h1>UnControll Comp</h1>
            <form onSubmit={handleSubmit}>
                <label>Full Name: </label>
                <input type="text" ref={fnameRef} />
                <br />
                <br />
                <label>Email: </label>
                <input type="text" ref={emailRef} />
                <br />
                <br />
                <label>Passeword: </label>
                <input type="text" ref={passRef} />
                <br />
                <br />
                <button type="submit">Register</button>
            </form>
        </>
    )
};

export default Uncontrolled;