import React, { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import ListComp from "./Components/ListComp";
import Controlled from "./Components/Controlled";
import Uncontrolled from "./Components/Uncontrolled";
import ValidationForm from "./Components/ValidationForm";
import HocComp from "./Components/HoCComp";
import { Link, Route, Routes, useNavigate } from "react-router";

const ValidationHOC = HocComp(ValidationForm);

function App() {
  let [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const handleClick = () => {
    let name = "Hello"
      navigate(`/list/${name}`)
  }

  useEffect(()=> {
    setTimeout(()=> {
      setIsLoading(false)
    }, 5000);
  }, []);
  return(
  <React.Fragment>
    {/* <Counter name="Girish Gondaliya" />
    <ListComp />
    <Controlled />
    <Uncontrolled />
    <ValidationForm />
    <ValidationHOC isLoading={isLoading} /> */}
    <h1>Header Department</h1>
      <Link to={"/"}>Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to={"/list/Smith Peter"}>List</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to={"/controlled"}>Controlled</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={handleClick}>List Comp</button>
    <Routes>
      <Route path="/" element={<Counter name="Girish Gondaliya" />} />
      <Route path="/list/:name" element={<ListComp />} />
      <Route path="/controlled" element={<Controlled />} />
      <Route path="/*" element={<h1>Not Found</h1>} />
    </Routes>

    <h1>Footer Department</h1>
  </React.Fragment>
  );
}

export default App;
