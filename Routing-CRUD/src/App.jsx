import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./Components/Header";
import AddEmployee from "./Components/AddEmployee";
import Home from "./Components/Home";
import EditEmployee from "./Components/EditEmployee";


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-employee" element={<AddEmployee />} />
      <Route path="/edit-employee/:id" element={<EditEmployee />} />
    </Routes>
    </>
  );
}

export default App;
