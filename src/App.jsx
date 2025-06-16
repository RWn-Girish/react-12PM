import React, { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import ListComp from "./Components/ListComp";
import Controlled from "./Components/Controlled";
import Uncontrolled from "./Components/Uncontrolled";
import ValidationForm from "./Components/ValidationForm";
import HocComp from "./Components/HoCComp";

const ValidationHOC = HocComp(ValidationForm);

function App() {
  let [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    setTimeout(()=> {
      setIsLoading(false)
    }, 5000);
  }, []);
  return(
  <React.Fragment>
    {/* <Counter name="Girish Gondaliya" /> */}
    {/* <ListComp /> */}
    {/* <Controlled /> */}
    {/* <Uncontrolled /> */}
    {/* <ValidationForm /> */}
    <ValidationHOC isLoading={isLoading} />
  </React.Fragment>
  );
}

export default App;
