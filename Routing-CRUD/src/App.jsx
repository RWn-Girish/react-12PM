import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./Components/Header";
import AddEmployee from "./Components/AddEmployee";
import Home from "./Components/Home";


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-employee" element={<AddEmployee />} />
    </Routes>
    </>
  );
}

export default App;
